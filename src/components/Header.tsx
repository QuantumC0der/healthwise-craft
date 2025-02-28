import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, User } from "lucide-react";
import { useUser } from '../context/UserContext'; // Assumed import
import AuthDialog from './AuthDialog'; // Assumed import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { userData, isAuthenticated } = useUser(); // Using the assumed context
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

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
    { name: "About Us", link: "#", emoji: "🌟" },
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
              <span className="text-primary">MySupplement</span>
              <span className="text-secondary">Match</span>
              <motion.div 
                className="absolute -right-6 -top-3"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </motion.div>
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
              <motion.a
                key={index}
                href={item.link}
                className="flex items-center text-foreground/80 hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="mr-1">{item.emoji}</span>
                <span>{item.name}</span>
              </motion.a>
            ))}

            {isAuthenticated ? (
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-account'))}
                className="flex items-center gap-2 ml-2 py-1.5 px-3 rounded-full bg-primary/10 text-primary"
              >
                {userData.photoURL ? (
                  <img src={userData.photoURL} alt={userData.name} className="w-6 h-6 rounded-full object-cover" />
                ) : (
                  <User className="w-4 h-4" />
                )}
                <span>{userData.name?.split(' ')[0] || 'Account'}</span>
              </button>
            ) : (
              <button 
                onClick={() => setIsAuthDialogOpen(true)}
                className="py-1.5 px-3 rounded-full bg-primary/10 text-primary"
              >
                Sign In
              </button>
            )}
          </nav>
        </div>

        {/* Mobile navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-center text-foreground/80 hover:text-primary px-4 py-2 rounded-lg transition-colors"
              >
                <span className="mr-2 text-lg">{item.emoji}</span>
                <span>{item.name}</span>
              </a>
            ))}
            {isAuthenticated ? (
              <button 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-account'));
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 mt-2 py-2"
              >
                {userData.photoURL ? (
                  <img src={userData.photoURL} alt={userData.name} className="w-6 h-6 rounded-full object-cover" />
                ) : (
                  <User className="w-4 h-4" />
                )}
                <span>My Account</span>
              </button>
            ) : (
              <button 
                onClick={() => {
                  setIsAuthDialogOpen(true);
                  setIsMenuOpen(false);
                }}
                className="block py-2 mt-2"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      <AuthDialog isOpen={isAuthDialogOpen} onClose={() => setIsAuthDialogOpen(false)} />
      </div>
    </header>
  );
};

export default Header;