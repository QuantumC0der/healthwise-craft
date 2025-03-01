
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "How It Works", link: "/how-it-works", emoji: "🧩" },
    { name: "Supplements", link: "/category/all", emoji: "💊" },
    { name: "Science", link: "/supplement-science", emoji: "🔬" },
    { name: "About Us", link: "/about-us", emoji: "🌟" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg py-2 rounded-b-3xl' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <motion.div 
              className="text-2xl font-display font-medium relative"
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/">
                <span className="text-primary">MySupplement</span>
                <span className="text-secondary">Match</span>
                <motion.div 
                  className="absolute -right-6 -top-3"
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute h-0.5 w-full bg-primary transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`absolute h-0.5 w-full bg-primary transform transition duration-300 ease-in-out top-2 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`absolute h-0.5 w-full bg-primary transform transition duration-300 ease-in-out top-4 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={item.link} 
                  className="flex items-center text-foreground/80 hover:text-primary transition-colors"
                >
                  <span className="mr-1">{item.emoji}</span>
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="flex items-center text-foreground/80 hover:text-primary px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-2 text-lg">{item.emoji}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
