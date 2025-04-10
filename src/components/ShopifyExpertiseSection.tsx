
import React from 'react';
import { motion } from 'framer-motion';

const expertiseAreas = [
  {
    title: "Theme Development",
    details: [
      "Custom theme creation from scratch",
      "Liquid templating expertise",
      "Responsive & mobile-first design",
      "Theme optimization for performance",
      "Section & block customizability"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "App Development",
    details: [
      "Custom app development",
      "App Bridge implementation",
      "Public & private app creation",
      "App Store submission process",
      "App maintenance & updates"
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "API Integration",
    details: [
      "REST & GraphQL API expertise",
      "Third-party API integration",
      "Custom API endpoint creation",
      "Webhook implementation",
      "Data synchronization solutions"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Hydrogen & Headless",
    details: [
      "Hydrogen framework expertise",
      "Headless architecture design",
      "Server & client components",
      "Storefront API integration",
      "Performance optimization"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  }
];

const ShopifyExpertiseSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-sand-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">Shopify Expertise</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive Shopify development skills to create exceptional e-commerce solutions
          </p>
        </div>
        
        {expertiseAreas.map((area, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-20`}
          >
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl" style={{ maxHeight: '400px' }}>
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif text-gold mb-4">{area.title}</h3>
              <ul className="space-y-3">
                {area.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-gold/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ShopifyExpertiseSection;
