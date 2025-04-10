
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, Fashion Boutique",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content: "Working with this developer transformed our Shopify store. Our sales increased by 40% after implementing the custom theme and checkout optimizations."
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, Home Goods",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content: "The custom app developed for our product configurator has been a game-changer. Customers love the interactive experience, and our average order value has increased significantly."
  },
  {
    name: "Emma Rodriguez",
    position: "Founder, Beauty Brand",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    content: "The headless Shopify implementation using Hydrogen has given us the flexibility we needed while maintaining excellent performance. Our page load times decreased by 70%."
  },
  {
    name: "David Kim",
    position: "CTO, Electronics Store",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    content: "The API integrations implemented for our inventory and fulfillment systems work flawlessly. We've saved countless hours on manual processes and eliminated errors."
  }
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  
  const nextTestimonial = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section className="py-24 px-4 md:px-8 bg-sand-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-gold/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear what clients say about my Shopify development services
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/3 relative h-64 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: index === active ? 1 : 0,
                  scale: index === active ? 1 : 0.8,
                  zIndex: index === active ? 10 : 0
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gold shadow-xl">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="lg:w-2/3">
            <div className="relative h-80">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: index === active ? 1 : 0,
                    y: index === active ? 0 : 50,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <svg className="w-12 h-12 text-gold/20 mb-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 italic text-lg mb-8">{testimonial.content}</p>
                    <div>
                      <h4 className="text-lg font-serif text-gold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === active ? 'bg-gold' : 'bg-sand-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
