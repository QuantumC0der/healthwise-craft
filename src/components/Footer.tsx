
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialItems = [
    { icon: "🎮", name: "Facebook", link: "#" },
    { icon: "📸", name: "Instagram", link: "#" },
    { icon: "🐦", name: "Twitter", link: "#" },
  ];

  const footerItems = [
    {
      title: "Fun Stuff",
      links: [
        { name: "How It Works", link: "/how-it-works" },
        { name: "Science Magic", link: "/supplement-science" },
        { name: "Cool Research", link: "/supplement-science#research" },
        { name: "Our Blog", link: "/blog" },
      ]
    },
    {
      title: "Our Team",
      links: [
        { name: "About Us", link: "/about-us" },
        { name: "Join Us", link: "/join-us" },
        { name: "Say Hello", link: "/contact" },
        { name: "News", link: "/news" },
      ]
    },
    {
      title: "Boring But Important",
      links: [
        { name: "Terms", link: "/terms" },
        { name: "Privacy", link: "/privacy" },
        { name: "Cookies", link: "/cookies" },
        { name: "Disclaimer", link: "/terms#disclaimer" },
      ]
    }
  ];

  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="text-2xl font-display font-medium">
                <span className="text-primary">MySupplement</span>
                <span className="text-secondary">Match</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Finding your perfect supplement match based on real science, real results, and your unique body.
            </p>
            <div className="flex space-x-4">
              {socialItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <span>{item.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerItems.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-display text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.link} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MySupplementMatch. All rights reserved. Rishul Chanana, Founder & CEO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
