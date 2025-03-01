
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

const OurTeam = () => {
  const teamMember = {
    name: "Rishul Chanana",
    role: "Founder & CEO",
    description: "Rishul had the brilliant idea to create MySupplementMatch and leads our team with passion and expertise!",
    image: "/lovable-uploads/1ea00e70-cee4-4e07-a819-3e90fef8e5d0.png",
    color: "border-secondary",
  };

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
                Meet Our <span className="text-secondary">Founder</span>
              </Typography>
              
              <Typography variant="lead" className="mb-8">
                The visionary behind MySupplementMatch! 🌟
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

        {/* Team Member */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-dashed"
                style={{ borderColor: `var(--${teamMember.color.split('-')[1]})` }}
              >
                <div className="p-4">
                  <div className="relative mb-4">
                    <img 
                      src={teamMember.image} 
                      alt={teamMember.name}
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                    <div className="absolute -bottom-6 right-6">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-accent">
                        <span className="text-xl">✨</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 text-center">
                    <Typography variant="h2" className="text-primary mb-1">
                      {teamMember.name}
                    </Typography>
                    
                    <Typography variant="small" className="text-secondary font-bold mb-4 inline-block text-xl">
                      {teamMember.role}
                    </Typography>
                    
                    <Typography className="text-lg">
                      {teamMember.description}
                    </Typography>
                  </div>
                </div>
              </motion.div>
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
