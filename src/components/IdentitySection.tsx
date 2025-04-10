
import React from 'react';

const IdentitySection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-gold">Where Fashion Meets Identity</h2>
          <p className="text-sm md:text-base text-gray-700">
            Welcome to Glamouria, where fashion meets identity and style knows no bounds.
          </p>
          <p className="text-sm md:text-base text-gray-700 max-w-md">
            Our team works around the clock to bring you the coolest and latest fashion trends. From casual to formal, we've got you covered.
          </p>
          <div className="pt-4">
            <button className="btn-outline">Read More</button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
            alt="Fashion model in blue outfit" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;
