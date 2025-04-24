
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!parallaxRef.current) return;
      const scrollPosition = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'brightness(0.7)'
        }}
        ref={parallaxRef}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand-100/30 to-sand-100 z-10"></div>
      
      {/* Content container */}
      <div className="relative z-20 flex items-center justify-center w-full h-full px-6">
        <div className="max-w-7xl w-full mx-auto">
          <motion.div 
            className="bg-sand-200/70 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-gold/20 max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Shopify Development Expert
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl font-serif text-gold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transforming E-commerce with<br/>Custom Shopify Solutions
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Specialized in developing bespoke Shopify themes, custom apps, 
              API integrations, and headless solutions using Hydrogen to elevate your 
              online store and drive business growth.
            </motion.p>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a 
                href="#services" 
                className="btn-filled flex items-center gap-2"
              >
                View Services <ArrowRight size={16} />
              </a>
              <a 
                href="#contact" 
                className="btn-outline"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-gold flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
