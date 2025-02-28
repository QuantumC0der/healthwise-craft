import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display">MySupplementMatch</Link>
        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:underline font-body">Home</Link></li>
              <li><Link to="#" className="hover:underline font-body">About</Link></li>
              <li><Link to="#" className="hover:underline font-body">Contact</Link></li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;