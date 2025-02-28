
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, ChevronDown, Sparkles } from 'lucide-react';

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
    { name: "How It Works", link: "#", emoji: "🧩" },
    { name: "Supplements", link: "#", emoji: "💊" },
    { name: "Science", link: "#", emoji: "🔬" },
    { name: "About Us", link: "#", emoji: "👋" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg py-2 rounded-b-3xl' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
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
              <span className="text-primary">Health</span>
              <span className="text-secondary">Wise</span>
              <motion.div 
                className="absolute -right-6 -top-3"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a 
                key={item.name}
                href={item.link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="text-md font-body font-bold px-4 py-1.5 rounded-full relative group hover:text-primary transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(241, 211, 255, 0.3)"
                }}
              >
                <span className="mr-1">{item.emoji}</span> {item.name}
              </motion.a>
            ))}
          </nav>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center space-x-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center text-md font-body font-bold bg-primary/10 px-4 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
            >
              <User className="w-4 h-4 mr-2" />
              My Account
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden bg-primary text-white p-2 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t rounded-b-3xl overflow-hidden shadow-lg"
          >
            <div className="container-custom py-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.a 
                    key={item.name}
                    href={item.link}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 * index }}
                    className="text-md font-body font-bold hover:text-primary transition-colors px-4 py-2 rounded-full"
                  >
                    <span className="mr-2">{item.emoji}</span> {item.name}
                  </motion.a>
                ))}
                <motion.a 
                  href="#" 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.25 }}
                  className="text-md font-body font-bold hover:text-primary transition-colors px-4 py-2 rounded-full flex items-center"
                >
                  <User className="w-4 h-4 mr-2" />
                  My Account
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
