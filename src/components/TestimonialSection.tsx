
import React from 'react';

const reviews = [
  {
    id: 1,
    text: '"I never imagined clothes could make someone feel so confident and fashionable. Truly impressive contemporary styling."',
    author: 'Bernard Ruiz',
    role: 'Verified Customer',
    image: 'https://images.unsplash.com/photo-1567784177951-6fa58317e16b?q=80&w=300',
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif text-gold mb-8">
        What Our Customers Say
      </h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <blockquote className="text-lg md:text-xl text-gray-700 mb-4">
            {reviews[0].text}
          </blockquote>
          <div className="flex items-center gap-2">
            <p className="text-gold font-serif">{reviews[0].author}</p>
            <span className="text-gray-500 text-sm">•</span>
            <p className="text-gray-500 text-sm">{reviews[0].role}</p>
          </div>
        </div>
        <div className="md:w-1/3 flex gap-2">
          <img 
            src="https://images.unsplash.com/photo-1566807810030-3eaa60f3e670?q=80&w=200" 
            alt="Customer" 
            className="w-1/3 h-auto object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200" 
            alt="Customer" 
            className="w-1/3 h-auto object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" 
            alt="Customer" 
            className="w-1/3 h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
