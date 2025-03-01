
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Rocket, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      title: "Super Friendly Advice",
      description: "We make sure all our supplement suggestions are perfect for kids and grown-ups alike!",
      icon: Heart,
      color: "bg-pink-soft",
    },
    {
      title: "Fun Science Magic",
      description: "We use cool science to match you with the exact right vitamins for your special body!",
      icon: Sparkles,
      color: "bg-purple-soft",
    },
    {
      title: "Always Honest",
      description: "We only recommend supplements that really work and are super safe for everyone!",
      icon: Users,
      color: "bg-green-soft",
    },
    {
      title: "Big Dreams",
      description: "We want to help millions of people feel amazing with the perfect vitamins just for them!",
      icon: Rocket,
      color: "bg-blue-soft",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-soft via-yellow-soft to-green-soft py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Typography variant="h1" className="mb-6 text-primary">
                About <span className="text-secondary">Our</span> Amazing Team!
              </Typography>
              
              <Typography variant="lead" className="mb-8">
                We're a bunch of vitamin-loving friends who want to help everyone find their perfect supplement match! 🌈
              </Typography>
              
              <motion.div
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Sparkles className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h2" className="mb-6 text-primary">
                  Our Fun Story! 📖
                </Typography>
                
                <Typography className="mb-4">
                  Once upon a time, our founder Rishul was feeling super tired all the time. He tried lots of different vitamins but didn't know which ones were right for him!
                </Typography>
                
                <Typography className="mb-4">
                  So he decided to make a magical website that would help everyone find the PERFECT vitamins just for them! He gathered a team of super smart scientists and computer wizards to build MySupplementMatch!
                </Typography>
                
                <Typography>
                  Now, we help thousands of people feel amazing every day with the exact right supplements for their bodies! It's like magic, but it's actually science! ✨
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-secondary p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team working together"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-24 h-24 bg-purple-soft rounded-full z-0"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-soft rounded-full z-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-purple-soft/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Typography variant="h2" className="mb-4 text-primary">
                What Makes Us Special! 🌟
              </Typography>
              <Typography variant="lead">
                Here are the super important things we believe in!
              </Typography>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-primary"
                >
                  <div className="p-8 flex items-start">
                    <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mr-4 shadow-md flex-shrink-0`}>
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div>
                      <Typography variant="h4" className="mb-2 text-primary">
                        {value.title}
                      </Typography>
                      
                      <Typography>
                        {value.description}
                      </Typography>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-accent to-secondary">
          <div className="container-custom">
            <div className="text-center">
              <Typography variant="h2" className="text-white mb-6">
                Ready to Join Our Adventure? 🚀
              </Typography>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/our-team"
                    className="bg-white text-primary font-display rounded-full px-8 py-4 text-xl shadow-xl hover:shadow-2xl transition-all inline-block"
                  >
                    Meet Our Team! 👋
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="bg-primary text-white font-display rounded-full px-8 py-4 text-xl shadow-xl hover:shadow-2xl transition-all inline-block"
                  >
                    Say Hello! 💬
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
