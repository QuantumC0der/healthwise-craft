import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-display text-primary">
            MySupplementMatch
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/quiz" className="text-foreground hover:text-primary transition-colors">
              Find Matches
            </Link>
            <Link to="/saved" className="text-foreground hover:text-primary transition-colors">
              Saved
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;