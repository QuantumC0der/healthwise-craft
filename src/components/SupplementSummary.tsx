
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

// Sample supplement categories
const categories = [
  {
    id: 'vitamins',
    name: 'Vitamins & Minerals',
    description: 'Essential nutrients for overall health and wellbeing',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    count: 24
  },
  {
    id: 'adaptogens',
    name: 'Adaptogens',
    description: 'Natural substances that help your body adapt to stress',
    image: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?q=80&w=800&auto=format&fit=crop',
    count: 12
  },
  {
    id: 'probiotics',
    name: 'Probiotics',
    description: 'Beneficial bacteria for gut health and immunity',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=800&auto=format&fit=crop',
    count: 8
  },
  {
    id: 'omega',
    name: 'Omega Fatty Acids',
    description: 'Essential fats that support heart and brain health',
    image: 'https://images.unsplash.com/photo-1535185384036-28bbc7106c5d?q=80&w=800&auto=format&fit=crop',
    count: 6
  }
];

const SupplementSummary = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -8,
      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <div className="py-20 bg-sage-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-sm font-medium">Our Solutions</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-medium mb-4"
          >
            MySupplementMatch for Every Need
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto font-body"
          >
            Our recommendations are tailored to your unique health profile, goals, and preferences.
            We analyze thousands of high-quality supplements to find the perfect match for you.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={index}
              className="relative group"
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div 
                className="relative overflow-hidden rounded-xl bg-white border border-sage-100 transition-all duration-300 shadow-md"
              >
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                <div className="p-6 relative">
                  <div className="absolute top-0 right-0 -mt-10 mr-4 bg-sage-100 text-sage-800 rounded-full px-3 py-1 text-sm font-medium z-20">
                    {category.count} Supplements
                  </div>
                  
                  <h3 className="text-xl font-display font-medium mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4 font-body">{category.description}</p>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button variant="outline" className="group">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupplementSummary;
