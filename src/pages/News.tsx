
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const News = () => {
  const newsArticles = [
    {
      title: "New Vitamin D Study Shows Amazing Benefits!",
      summary: "Scientists just discovered that vitamin D is even MORE important than we thought for helping your immune system stay super strong!",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
      category: "Research",
      color: "bg-pink-soft",
    },
    {
      title: "MySupplementMatch Helps 10,000 Kids Feel Better!",
      summary: "We're super excited to announce that we've helped 10,000 amazing kids find the perfect vitamins to help them feel their very best!",
      date: "April 22, 2023",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      category: "Company News",
      color: "bg-purple-soft",
    },
    {
      title: "New Berry Flavored Vitamins Now Available!",
      summary: "We've added super yummy berry flavored vitamins to our recommendations! They taste like candy but are packed with healthy goodness!",
      date: "March 10, 2023",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop",
      category: "Product News",
      color: "bg-blue-soft",
    },
    {
      title: "Meet Dr. Kim, Our Newest Vitamin Expert!",
      summary: "We're thrilled to welcome Dr. Lee Kim to our team! Dr. Kim knows EVERYTHING about vitamins and will help make our matches even better!",
      date: "February 28, 2023",
      image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=987&auto=format&fit=crop",
      category: "Team Updates",
      color: "bg-green-soft",
    },
    {
      title: "New Mobile App Coming Soon!",
      summary: "Get ready for our super cool new mobile app! Track your vitamins, get reminders, and find new recommendations right from your phone!",
      date: "January 15, 2023",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
      category: "Product News",
      color: "bg-yellow-soft",
    },
    {
      title: "Omega-3 Found to Help Kids Do Better in School!",
      summary: "A new study shows that kids who take omega-3 supplements do better on tests and have an easier time concentrating in class!",
      date: "December 5, 2022",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2070&auto=format&fit=crop",
      category: "Research",
      color: "bg-orange-soft",
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
                Latest <span className="text-secondary">News</span> & Updates!
              </Typography>
              
              <Typography variant="lead" className="mb-8">
                Check out all the exciting things happening in the world of vitamins and at MySupplementMatch! 📰
              </Typography>
            </motion.div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-primary h-full flex flex-col"
                >
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${article.color} px-3 py-1 rounded-full text-primary text-xs font-bold font-display`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-4 h-4 text-secondary mr-2" />
                      <Typography variant="small" className="text-secondary">
                        {article.date}
                      </Typography>
                    </div>
                    
                    <Typography variant="h3" className="mb-3 text-primary">
                      {article.title}
                    </Typography>
                    
                    <Typography className="mb-6 flex-grow">
                      {article.summary}
                    </Typography>
                    
                    <Link 
                      to="#" 
                      className="flex items-center text-primary font-display hover:text-secondary transition-colors mt-auto"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-yellow-soft">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 border-4 border-dashed border-primary">
              <div className="text-center mb-8">
                <Typography variant="h2" className="mb-4 text-primary">
                  Get Fun News In Your Inbox! 📧
                </Typography>
                <Typography>
                  Sign up for our newsletter to get the latest news about vitamins and supplements sent right to you!
                </Typography>
              </div>
              
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-xl border-2 border-purple-soft focus:border-primary outline-none transition-colors"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gradient-to-r from-primary to-secondary text-white font-display rounded-xl px-6 py-3 shadow-md hover:shadow-lg transition-all whitespace-nowrap"
                >
                  Subscribe Now! 🚀
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
