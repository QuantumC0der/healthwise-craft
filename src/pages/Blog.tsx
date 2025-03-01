
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Super Awesome Vitamins Every Kid Should Know About!",
      summary: "These amazing vitamins help you grow big and strong, fight off colds, and give you tons of energy for playing all day!",
      date: "June 10, 2023",
      author: "Dr. Maya Johnson",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
      tags: ["Vitamins", "Health Tips", "Kids"],
      color: "border-primary",
    },
    {
      title: "Why Fish Oil Is Like Brain Food! 🧠",
      summary: "Fish oil has special omega-3s that help your brain work super well! Learn why it's like giving your brain a power boost!",
      date: "May 22, 2023",
      author: "Dr. Lee Kim",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      tags: ["Brain Health", "Omega-3", "Focus"],
      color: "border-secondary",
    },
    {
      title: "Gummy Vitamins vs. Pills: The Great Vitamin Showdown!",
      summary: "Are gummy vitamins as good as pills? We compare them in the ultimate vitamin battle to see which is best for kids!",
      date: "April 15, 2023",
      author: "Alex Thompson",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop",
      tags: ["Gummies", "Vitamins", "Comparison"],
      color: "border-accent",
    },
    {
      title: "How to Get Picky Eaters to Take Their Vitamins",
      summary: "Does your child refuse to take vitamins? Try these super fun tricks to make vitamin time the best part of the day!",
      date: "March 30, 2023",
      author: "Jamie Winters",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
      tags: ["Picky Eaters", "Tips", "Parents"],
      color: "border-primary",
    },
    {
      title: "The Magic of Vitamin D: Sunshine in a Pill! ☀️",
      summary: "Learn why vitamin D is like bottled sunshine and how it helps keep your bones super strong and your mood super happy!",
      date: "February 18, 2023",
      author: "Dr. Maya Johnson",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      tags: ["Vitamin D", "Mood", "Bone Health"],
      color: "border-secondary",
    },
    {
      title: "Probiotics: The Tiny Tummy Helpers Living in Your Gut!",
      summary: "Meet the billions of friendly little bugs that live in your tummy and help you digest food and stay healthy!",
      date: "January 5, 2023",
      author: "Dr. Lee Kim",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2070&auto=format&fit=crop",
      tags: ["Probiotics", "Gut Health", "Digestion"],
      color: "border-accent",
    },
  ];

  const categories = [
    "Vitamins & Minerals",
    "Omega Fatty Acids",
    "Probiotics",
    "Kids Health",
    "Teen Health",
    "Nutrition Tips",
    "Supplement Science",
    "Health Games",
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
                Our Fun <span className="text-secondary">Health</span> Blog!
              </Typography>
              
              <Typography variant="lead" className="mb-8">
                Discover awesome articles about vitamins, health, and how to feel super amazing every day! 📚
              </Typography>
            </motion.div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="sticky top-28">
                  {/* Search */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-6 mb-8 border-2 border-primary"
                  >
                    <Typography variant="h4" className="mb-4 text-primary">
                      Find Cool Stuff! 🔍
                    </Typography>
                    
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search for fun articles..."
                        className="w-full px-4 py-3 rounded-xl border-2 border-purple-soft focus:border-primary outline-none transition-colors pr-10"
                      />
                      <button className="absolute right-3 top-3 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                  
                  {/* Categories */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white rounded-2xl shadow-md p-6 mb-8 border-2 border-secondary"
                  >
                    <Typography variant="h4" className="mb-4 text-primary">
                      Fun Categories! 🏷️
                    </Typography>
                    
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          to="#"
                          className="flex items-center py-2 px-3 rounded-lg hover:bg-purple-soft transition-colors group"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                          <Typography className="group-hover:text-primary transition-colors">
                            {category}
                          </Typography>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Recent Posts */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-md p-6 border-2 border-accent"
                  >
                    <Typography variant="h4" className="mb-4 text-primary">
                      Popular Articles! 🌟
                    </Typography>
                    
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post, index) => (
                        <Link key={index} to="#" className="flex items-start hover:bg-purple-soft/20 p-2 rounded-lg transition-colors">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded-lg mr-3"
                          />
                          <div>
                            <Typography variant="small" className="font-bold text-primary">
                              {post.title}
                            </Typography>
                            <div className="flex items-center mt-1">
                              <Calendar className="w-3 h-3 text-secondary mr-1" />
                              <Typography variant="small" className="text-muted-foreground text-xs">
                                {post.date}
                              </Typography>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Blog Posts */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-white rounded-3xl shadow-lg overflow-hidden border-4 ${post.color} h-full flex flex-col`}
                    >
                      <div className="relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="bg-purple-soft px-2 py-1 rounded-full text-primary text-xs font-bold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Typography variant="h3" className="mb-3 text-primary">
                          {post.title}
                        </Typography>
                        
                        <Typography className="mb-4 flex-grow">
                          {post.summary}
                        </Typography>
                        
                        <div className="mt-auto">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 text-secondary mr-2" />
                              <Typography variant="small" className="text-secondary">
                                {post.author}
                              </Typography>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 text-secondary mr-2" />
                              <Typography variant="small" className="text-secondary">
                                {post.date}
                              </Typography>
                            </div>
                          </div>
                          
                          <Link 
                            to="#" 
                            className="flex items-center text-primary font-display hover:text-secondary transition-colors"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    {[1, 2, 3, "...", 10].map((page, index) => (
                      <Link
                        key={index}
                        to="#"
                        className={`w-10 h-10 flex items-center justify-center rounded-full ${
                          page === 1 
                            ? "bg-primary text-white" 
                            : "bg-white text-primary border-2 border-primary hover:bg-primary/10 transition-colors"
                        }`}
                      >
                        {page}
                      </Link>
                    ))}
                  </div>
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

export default Blog;
