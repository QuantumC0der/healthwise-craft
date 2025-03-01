
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Rocket, Heart, Star, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const JoinUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received!",
      description: "Thanks for applying! We'll get back to you super soon!",
      variant: "default",
    });
  };

  const positions = [
    {
      title: "Vitamin Expert",
      description: "Help us find the best supplements and make sure they're super safe for everyone!",
      icon: Star,
      color: "bg-yellow-soft",
    },
    {
      title: "Customer Helper",
      description: "Talk to our awesome users and help them find the perfect vitamins for them!",
      icon: Heart,
      color: "bg-pink-soft",
    },
    {
      title: "Computer Wizard",
      description: "Make our website even more magical with cool features and fun animations!",
      icon: Rocket,
      color: "bg-blue-soft",
    },
    {
      title: "Content Creator",
      description: "Write super fun and helpful articles about vitamins and health!",
      icon: Users,
      color: "bg-green-soft",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-soft via-blue-soft to-purple-soft py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Typography variant="h1" className="mb-6 text-primary">
                Join Our <span className="text-secondary">Amazing</span> Team!
              </Typography>
              
              <Typography variant="lead" className="mb-8">
                We're looking for super cool people to help us make MySupplementMatch even more awesome! 🚀
              </Typography>
              
              <motion.div
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Rocket className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Typography variant="h2" className="mb-4 text-primary">
                Super Fun Jobs! 🎮
              </Typography>
              <Typography variant="lead">
                Check out these awesome positions we're looking to fill!
              </Typography>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-primary"
                >
                  <div className={`${position.color} h-8 w-full`}></div>
                  <div className="p-8 flex items-start">
                    <div className={`${position.color} w-16 h-16 rounded-full flex items-center justify-center mr-4 shadow-md flex-shrink-0 -mt-4`}>
                      <position.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div>
                      <Typography variant="h3" className="mb-2 text-primary">
                        {position.title}
                      </Typography>
                      
                      <Typography className="mb-4">
                        {position.description}
                      </Typography>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent text-primary font-display rounded-full px-6 py-2 text-sm shadow-md hover:shadow-lg transition-all"
                        onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Apply Now! 📝
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-purple-soft/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Typography variant="h2" className="mb-4 text-primary">
                Why It's AWESOME to Work With Us! 🌈
              </Typography>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  emoji: "🎮",
                  title: "Super Fun Office",
                  description: "We have games, snacks, and the coolest office ever!"
                },
                {
                  emoji: "🌈",
                  title: "Amazing Team",
                  description: "Work with the friendliest and smartest people around!"
                },
                {
                  emoji: "🚀",
                  title: "Grow & Learn",
                  description: "Try new things and become even more awesome every day!"
                },
                {
                  emoji: "🍕",
                  title: "Free Pizza Fridays",
                  description: "Who doesn't love pizza? We have it EVERY Friday!"
                },
                {
                  emoji: "🏖️",
                  title: "Flexible Vacation",
                  description: "Take time off when you need it to recharge and have fun!"
                },
                {
                  emoji: "💖",
                  title: "Make People Happy",
                  description: "Help thousands of people feel healthier and happier!"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md border-2 border-secondary text-center"
                >
                  <div className="text-4xl mb-2">
                    {benefit.emoji}
                  </div>
                  <Typography variant="h4" className="mb-2 text-primary">
                    {benefit.title}
                  </Typography>
                  <Typography>
                    {benefit.description}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Typography variant="h2" className="mb-4 text-primary">
                Join Our Adventure! 🚀
              </Typography>
              <Typography variant="lead">
                Fill out this quick form and we'll get back to you super fast!
              </Typography>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-primary p-8 max-w-3xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-primary font-display">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-purple-soft focus:border-primary outline-none transition-colors"
                      placeholder="What should we call you?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-primary font-display">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border-2 border-purple-soft focus:border-primary outline-none transition-colors"
                      placeholder="How can we reach you?"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="position" className="block text-sm font-medium mb-1 text-primary font-display">
                    Which Job Looks Fun?
                  </label>
                  <select
                    id="position"
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-soft focus:border-primary outline-none transition-colors"
                    required
                  >
                    <option value="">Pick a super cool job!</option>
                    {positions.map((pos, index) => (
                      <option key={index} value={pos.title}>{pos.title}</option>
                    ))}
                    <option value="Other">Something else awesome!</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-primary font-display">
                    Tell Us About Yourself!
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-soft focus:border-primary outline-none transition-colors"
                    placeholder="What makes you awesome? Why do you want to join our team?"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-display rounded-full py-4 text-xl shadow-xl hover:shadow-2xl transition-all"
                >
                  Send My Application! 🚀
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default JoinUs;
