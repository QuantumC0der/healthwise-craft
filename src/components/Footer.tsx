import { motion } from "framer-motion";

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
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="text-2xl font-display font-medium">
              <span className="text-primary">MySupplement</span>
              <span className="text-secondary">Match</span>
            </div>
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
                    <a 
                      href={link.link} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MySupplementMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;