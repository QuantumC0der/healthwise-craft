
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Beaker, Microscope, BookOpen, FlaskConical, Sparkles } from "lucide-react";

const SupplementScience = () => {
  const categories = [
    {
      title: "Vitamins & Minerals",
      description: "These are like tiny helpers that make sure your body works super well!",
      icon: Beaker,
      color: "bg-blue-soft",
    },
    {
      title: "Omega Fatty Acids",
      description: "Special oils that help your brain stay super smart and your heart stay super strong!",
      icon: FlaskConical,
      color: "bg-yellow-soft",
    },
    {
      title: "Probiotics",
      description: "Friendly little bugs that live in your tummy and help you digest food!",
      icon: Microscope,
      color: "bg-green-soft",
    },
    {
      title: "Herbal Supplements",
      description: "Special plants that have been used for thousands of years to help people feel better!",
      icon: BookOpen,
      color: "bg-purple-soft",
    },
  ];

  const researchCards = [
    {
      title: "Vitamin D & Sunshine",
      description: "Scientists found that vitamin D helps your body use sunshine to make your bones super strong!",
      year: "2023",
    },
    {
      title: "Fish Oil Brain Power",
      description: "A cool study showed that fish oil helps kids concentrate better at school and remember more things!",
      year: "2022",
    },
    {
      title: "Probiotics & Happy Tummies",
      description: "Research shows that probiotics help your tummy feel happy and can even make you less grumpy!",
      year: "2023",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-soft via-purple-soft to-blue-soft py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Typography variant="h1" className="mb-6 text-primary">
                Supplement <span className="text-secondary">Science</span> & Magic!
              </Typography>
              
              <Typography variant="lead" className="mb-8">
                Let's learn about the super cool science behind vitamins and how they help your body do amazing things! 🔬✨
              </Typography>
              
              <motion.div
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              >
                <Sparkles className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Typography variant="h2" className="mb-4 text-primary">
                Types of Supplements! 🧪
              </Typography>
              <Typography variant="lead">
                There are lots of different kinds of vitamins that do different magical things for your body!
              </Typography>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-accent"
                >
                  <div className={`p-8 flex flex-col items-center text-center`}>
                    <div className={`${category.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md`}>
                      <category.icon className="w-10 h-10 text-primary" />
                    </div>
                    
                    <Typography variant="h3" className="mb-4 text-primary">
                      {category.title}
                    </Typography>
                    
                    <Typography>
                      {category.description}
                    </Typography>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-16 bg-gradient-to-r from-green-soft to-blue-soft">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Typography variant="h2" className="mb-4 text-primary">
                Cool Research Stuff! 📚
              </Typography>
              <Typography variant="lead">
                Scientists are always learning new things about how supplements help us!
              </Typography>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {researchCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md border-2 border-primary"
                >
                  <div className="text-xs text-secondary font-bold mb-2">
                    RESEARCH • {card.year}
                  </div>
                  <Typography variant="h4" className="mb-2 text-primary">
                    {card.title}
                  </Typography>
                  <Typography>
                    {card.description}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Facts Animation */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Typography variant="h2" className="mb-4 text-primary">
                Fun Vitamin Facts! 🌟
              </Typography>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Carrots really do help you see better because of Vitamin A! 🥕👁️",
                "Bananas have potassium that helps your muscles work great! 🍌💪",
                "Vitamin C can help you fight off colds and feel better faster! 🍊😊",
                "Calcium isn't just in milk - it's in broccoli too! 🥦🥛"
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-full shadow-lg border-2 border-secondary flex items-center"
                >
                  <div className="w-12 h-12 bg-yellow-soft rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">✨</span>
                  </div>
                  <Typography className="font-display">
                    {fact}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SupplementScience;
