
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold">
            Glamouria Fashion
          </h1>
          <h2 className="text-xl md:text-2xl font-serif text-gold">
            Embracing Fashion<br />with Confidence
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-md">
            Dive into our world of contemporary fashion designs. We're more than just clothes - we're a statement of who you are.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="btn-outline">Explore Now</button>
            <button className="btn-filled">Learn More</button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="public/lovable-uploads/51b20e9b-8907-4187-b524-a6226e687779.png" 
            alt="Fashion model in stylish outfit" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
