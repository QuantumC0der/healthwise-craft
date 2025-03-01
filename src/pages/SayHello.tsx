
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const SayHello = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you super duper fast!",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-soft via-green-soft to-blue-soft py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Typography variant="h1" className="mb-6 text-primary">
                Say <span className="text-secondary">Hello</span> To Us!
              </Typography>
              
              <Typography variant="lead" className="mb-8">
                We'd love to hear from you! Questions, comments, or just want to say hi? Let us know! 👋
              </Typography>
              
              <motion.div
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <MessageCircle className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h2" className="mb-8 text-primary">
                  Ways to Reach Us! 📱
                </Typography>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: Mail,
                      title: "Email Us",
                      details: "hello@mysupplementmatch.com",
                      color: "bg-pink-soft",
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      details: "(123) 456-7890",
                      color: "bg-green-soft",
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      details: "123 Vitamin Street, Supplement City, SC 12345",
                      color: "bg-yellow-soft",
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-md flex-shrink-0`}>
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <Typography variant="h4" className="mb-1 text-primary">
                          {item.title}
                        </Typography>
                        <Typography>
                          {item.details}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <Typography variant="h3" className="mb-4 text-primary">
                    Our Fun Office Hours! ⏰
                  </Typography>
                  
                  <div className="bg-white rounded-2xl shadow-md p-6 border-2 border-dashed border-secondary">
                    <div className="space-y-3">
                      {[
                        { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                        { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                        { day: "Sunday", hours: "Closed (We're taking vitamins!)" }
                      ].map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <Typography variant="h5" className="text-primary">
                            {schedule.day}
                          </Typography>
                          <Typography>
                            {schedule.hours}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-primary p-8">
                  <Typography variant="h3" className="mb-6 text-primary text-center">
                    Send Us a Message! 💌
                  </Typography>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1 text-primary font-display">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-xl border-2 border-purple-soft focus:border-primary outline-none transition-colors"
                        placeholder="What's your name?"
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
                        placeholder="Where can we reply?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1 text-primary font-display">
                        Subject
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-xl border-2 border-purple-soft focus:border-primary outline-none transition-colors"
                        required
                      >
                        <option value="">What's this about?</option>
                        <option value="question">I have a question</option>
                        <option value="feedback">I want to give feedback</option>
                        <option value="partnership">Let's work together!</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1 text-primary font-display">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border-2 border-purple-soft focus:border-primary outline-none transition-colors"
                        placeholder="What would you like to tell us?"
                        required
                      ></textarea>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white font-display rounded-full py-4 text-xl shadow-xl hover:shadow-2xl transition-all"
                    >
                      Send Message! 🚀
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-purple-soft/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Typography variant="h2" className="mb-4 text-primary">
                Quick Questions & Answers! 🤔
              </Typography>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  question: "How fast will you answer my message?",
                  answer: "Super duper fast! We usually reply within 24 hours or even faster if we're not busy making vitamin matches!"
                },
                {
                  question: "Can I call instead of sending a message?",
                  answer: "Absolutely! Give us a ring at (123) 456-7890 during our office hours and we'll be happy to chat!"
                },
                {
                  question: "Do you have any vitamins in your office?",
                  answer: "YES! Our office is like a vitamin wonderland! We have samples of all kinds of supplements!"
                },
                {
                  question: "Can I visit your office to talk in person?",
                  answer: "We'd love to meet you! Just send us a message first so we can make sure someone is ready to greet you!"
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md border-2 border-accent"
                >
                  <Typography variant="h4" className="mb-2 text-primary">
                    {faq.question}
                  </Typography>
                  <Typography>
                    {faq.answer}
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

export default SayHello;
