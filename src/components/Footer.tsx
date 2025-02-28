import React from 'react';
import { motion } from 'framer-motion';

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
        { name: "How It Works", link: "#" },
        { name: "Science Magic", link: "#" },
        { name: "Cool Research", link: "#" },
        { name: "Our Blog", link: "#" },
      ]
    },
    {
      title: "Our Team",
      links: [
        { name: "About Us", link: "#" },
        { name: "Join Us", link: "#" },
        { name: "Say Hello", link: "#" },
        { name: "News", link: "#" },
      ]
    },
    {
      title: "Boring But Important",
      links: [
        { name: "Terms", link: "#" },
        { name: "Privacy", link: "#" },
        { name: "Cookies", link: "#" },
        { name: "Disclaimer", link: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-purple-soft to-white relative overflow-hidden rounded-t-3xl">
      <div className="absolute top-0 left-0 w-full h-6 bg-primary rounded-t-3xl"></div>

      {/* Fun shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-soft rounded-full opacity-80"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-green-soft rounded-full opacity-80"></div>

      <div className="container-custom pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <motion.h3 
              className="text-2xl font-display mb-4 text-primary"
              whileHover={{ scale: 1.05 }}
            >
              MySupplement<span className="text-secondary">Match</span>
            </motion.h3>
            <p className="text-foreground text-md mb-4 font-body">
              We find the perfect supplements for your unique needs! It's like magic, but it's science! ✨
            </p>
          </div>

          {footerItems.map((section) => (
            <div key={section.title}>
              <h4 className="font-display text-lg mb-4 text-primary">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.link} 
                      className="text-md font-body hover:text-primary transition-colors inline-block hover:translate-x-1 transition-transform"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-md text-foreground mb-4 sm:mb-0 font-body">
            © {new Date().getFullYear()} MySupplementMatch. All rights reserved. 
            <span className="block sm:inline font-display italic text-primary rotate-2 inline-block mt-1 sm:mt-0 sm:ml-1">
              A Rishul Chanana Production
            </span>
          </p>

          <div className="flex space-x-4">
            {socialItems.map((item) => (
              <a 
                key={item.name}
                href={item.link} 
                className="text-2xl hover:scale-125 transition-all transform-gpu"
                title={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;