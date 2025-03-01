
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Sparkles, ChevronRight } from "lucide-react";
import { supplements } from "../data/supplements";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const title = categoryId === "all" ? "All Supplements" : categoryId?.replace("-", " & ");
  
  // Filter supplements by category
  const categorySupplements = categoryId === "all" 
    ? supplements
    : supplements.filter(supp => 
        supp.category.toLowerCase() === categoryId?.replace("-", " "));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16">
        <section className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-display text-primary mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title} 
              <motion.span
                animate={{ rotate: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block ml-2"
              >
                <Sparkles className="h-8 w-8 text-yellow-400" />
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-foreground/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {categoryId === "all" 
                ? "Discover our complete range of high-quality supplements designed to support your health journey!"
                : `Explore our selection of ${title} supplements designed to boost your wellbeing and health!`}
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {categorySupplements.map((supplement, index) => (
              <motion.div
                key={supplement.id}
                className="bg-gradient-to-br from-blue-soft to-purple-soft rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.03, rotate: 1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="mb-4 h-40 rounded-2xl overflow-hidden">
                  <img 
                    src={supplement.image} 
                    alt={supplement.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display text-primary mb-2">{supplement.name}</h3>
                <p className="text-foreground/70 mb-4">{supplement.description.substring(0, 100)}...</p>
                <div className="flex justify-between items-center">
                  <span className="bg-yellow-300 text-yellow-800 rounded-full px-3 py-1 text-sm font-medium">
                    {supplement.category}
                  </span>
                  <Link 
                    to={`/`} 
                    className="text-primary hover:text-secondary flex items-center"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-display text-primary mb-6">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display text-primary mb-2">🤔 How do I choose the right supplement?</h3>
                  <p className="text-foreground/70">Take our fun quiz to get personalized recommendations based on your health goals and needs!</p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-primary mb-2">⏰ How often should I take these supplements?</h3>
                  <p className="text-foreground/70">Each supplement has its own recommended dosage. Always follow the instructions on the label or consult with a healthcare professional.</p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-primary mb-2">🌈 Are these supplements safe?</h3>
                  <p className="text-foreground/70">All our supplements are thoroughly tested for quality and safety. However, it's always best to consult with your doctor before starting any new supplement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
