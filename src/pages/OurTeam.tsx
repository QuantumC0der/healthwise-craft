
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Maya Johnson",
      role: "Chief Vitamin Expert",
      description: "Dr. Maya knows EVERYTHING about vitamins and helps make sure we recommend the best ones!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      color: "border-primary",
    },
    {
      name: "Rishul Chanana",
      role: "Founder & Magic Maker",
      description: "Rishul had the big idea to create MySupplementMatch and helps make the website super fun!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
      color: "border-secondary",
    },
    {
      name: "Sam Rodriguez",
      role: "Computer Wizard",
      description: "Sam makes all the cool tech stuff work so the website can match you with perfect vitamins!",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=987&auto=format&fit=crop",
      color: "border-accent",
    },
    {
      name: "Dr. Lee Kim",
      role: "Research Genius",
      description: "Dr. Lee reads ALL the science papers about supplements and tells us which ones really work!",
      image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=987&auto=format&fit=crop",
      color: "border-primary",
    },
    {
      name: "Jamie Winters",
      role: "Customer Happiness Hero",
      description: "Jamie helps everyone who has questions and makes sure everyone finds their perfect match!",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=987&auto=format&fit=crop",
      color: "border-secondary",
    },
    {
      name: "Alex Thompson",
      role: "Fun Content Creator",
      description: "Alex writes all the funny and helpful information about supplements on our website!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      color: "border-accent",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-soft via-purple-soft to-pink-soft py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Typography variant="h1" className="mb-6 text-primary">
                Meet Our <span className="text-secondary">Awesome</span> Team!
              </Typography>
              
              <Typography variant="lead" className="mb-8">
                These super cool people work hard every day to help you find the perfect vitamins! 🌟
              </Typography>
              
              <motion.div
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <Sparkles className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-dashed"
                  style={{ borderColor: `var(--${member.color.split('-')[1]})` }}
                >
                  <div className="p-4">
                    <div className="relative mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-64 object-cover rounded-2xl"
                      />
                      <div className="absolute -bottom-6 right-6">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-accent">
                          <span className="text-xl">✨</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <Typography variant="h3" className="text-primary mb-1">
                        {member.name}
                      </Typography>
                      
                      <Typography variant="small" className="text-secondary font-bold mb-4 inline-block">
                        {member.role}
                      </Typography>
                      
                      <Typography>
                        {member.description}
                      </Typography>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-16 bg-yellow-soft">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Typography variant="h2" className="mb-4 text-primary">
                Want to Join Our Team? 🎮
              </Typography>
              <Typography variant="lead">
                We're always looking for awesome people to help us make MySupplementMatch even better!
              </Typography>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-primary p-8 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <Typography variant="h3" className="mb-4 text-primary">
                  We're Looking For:
                </Typography>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Vitamin Experts 🔬",
                    "Computer Geniuses 💻",
                    "Customer Helpers 🌟",
                    "Fun Writers ✏️"
                  ].map((position, index) => (
                    <div 
                      key={index}
                      className="bg-purple-soft rounded-xl p-4 font-display text-primary"
                    >
                      {position}
                    </div>
                  ))}
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <a
                    href="/join-us"
                    className="bg-gradient-to-r from-primary to-secondary text-white font-display rounded-full px-8 py-4 text-xl shadow-xl hover:shadow-2xl transition-all"
                  >
                    Join Our Team! 🚀
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurTeam;
