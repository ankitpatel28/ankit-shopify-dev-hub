
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = sectionRef.current;
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const offset = window.innerHeight * 0.8;
        
        if (elementTop <= offset) {
          element.classList.add('animate-fade-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-sand-200" style={{ 
        transform: 'skewY(-5deg)',
        transformOrigin: 'bottom left',
        zIndex: -1
      }} />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Certified Shopify expert with a passion for creating exceptional e-commerce experiences
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="Developer working on code" 
              className="w-full h-auto rounded-lg shadow-xl"
              style={{ 
                transform: 'perspective(1000px) rotateY(-10deg)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-serif text-gold mb-4">Shopify Development Expertise</h3>
              <p className="text-gray-700 mb-4">
                With over 5 years of dedicated Shopify development experience, I specialize in creating 
                custom themes, apps, and integrations that help businesses succeed in the competitive 
                e-commerce landscape.
              </p>
              <p className="text-gray-700 mb-4">
                My work combines technical expertise with a deep understanding of user experience
                and e-commerce best practices, resulting in stores that not only look beautiful
                but also convert visitors into customers.
              </p>
            </motion.div>
            
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                <span>Theme Development</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                <span>App Development</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                <span>API Integration</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                <span>Hydrogen/Headless</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                <span>Store Optimization</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                <span>Custom Solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
