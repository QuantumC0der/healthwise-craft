
import React from 'react';
import { Menu, X, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-xl font-medium">HealthWise</div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-primary">How It Works</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Supplements</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Science</a>
            <a href="#" className="text-sm font-medium hover:text-primary">About Us</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center text-sm font-medium hover:text-primary">
              <User className="w-4 h-4 mr-1" />
              Account
            </button>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-medium hover:text-primary">How It Works</a>
              <a href="#" className="text-sm font-medium hover:text-primary">Supplements</a>
              <a href="#" className="text-sm font-medium hover:text-primary">Science</a>
              <a href="#" className="text-sm font-medium hover:text-primary">About Us</a>
              <a href="#" className="text-sm font-medium hover:text-primary flex items-center">
                <User className="w-4 h-4 mr-1" />
                Account
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
