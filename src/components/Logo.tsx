
import React from 'react';
import { Hexagon } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Hexagon className="w-8 h-8 text-gold animate-pulse" />
      <div className="flex flex-col">
        <span className="text-xl font-serif font-bold text-gold tracking-wide">
          Ankit Dev Hub
        </span>
        <span className="text-xs text-gold-light/80">
          Shopify Development Expert
        </span>
      </div>
    </div>
  );
};

export default Logo;
