
import React from 'react';
import Logo from './Logo';
import { Menu, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-sand-200/70 backdrop-blur-sm border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-gold hover:text-gold-dark transition-colors">
            <Search size={20} />
          </a>
          <a href="#" className="text-gold hover:text-gold-dark transition-colors">
            <Menu size={24} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
