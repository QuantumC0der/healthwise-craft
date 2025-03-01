
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LightbulbIcon, BrainIcon, HeartIcon, Star, Wand2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Take the Fun Quiz! 📝",
      description: "Answer some super easy questions about yourself and what you like. It's quick and fun!",
      icon: LightbulbIcon,
      color: "bg-purple-soft",
    },
    {
      title: "Our Magic Machine Works! 🧠",
      description: "Our special computer looks at your answers and figures out what vitamins will make you feel awesome!",
      icon: BrainIcon,
      color: "bg-blue-soft",
    },
    {
      title: "Get Your Perfect Match! 💖",
      description: "We'll show you the exact supplements that will help you feel your very best!",
      icon: HeartIcon,
      color: "bg-pink-soft",
    },
    {
      title: "Feel Amazing! ⭐",
      description: "Take your special vitamins and start feeling super duper energetic and healthy!",
      icon: Star,
      color: "bg-yellow-soft",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-soft via-blue-soft to-green-soft py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Typography variant="h1" className="mb-6 text-primary">
                How Our <span className="text-secondary">Magic</span> Works!
              </Typography>
              
              <Typography variant="lead" className="mb-8">
                It's super easy to find the perfect vitamins just for you! Follow these fun steps and you'll be on your way to feeling amazing! ✨
              </Typography>
              
              <motion.div
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <Wand2 className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-primary"
                >
                  <div className={`p-8 flex flex-col items-center text-center`}>
                    <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md`}>
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    
                    <Typography variant="h3" className="mb-4 text-primary">
                      {step.title}
                    </Typography>
                    
                    <Typography>
                      {step.description}
                    </Typography>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="py-16 bg-yellow-soft">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Typography variant="h2" className="mb-4 text-primary">
                Fun Facts About Supplements! 🎈
              </Typography>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Vitamin C comes from super yummy fruits like oranges and strawberries! 🍊",
                "Fish oil helps your brain stay super smart and focused! 🐠",
                "Calcium makes your bones super strong like a superhero! 💪"
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md border-2 border-accent"
                >
                  <Typography className="text-center font-display">
                    {fact}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container-custom">
            <div className="text-center">
              <Typography variant="h2" className="text-white mb-6">
                Ready to Find Your Perfect Vitamins? 🌈
              </Typography>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="#assessment-section"
                  className="bg-white text-primary font-display rounded-full px-8 py-4 text-xl shadow-xl hover:shadow-2xl transition-all"
                >
                  Start the Fun Quiz Now! 🎮
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
