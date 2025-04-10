
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Theme Development",
    description: "Custom Shopify theme development tailored to your brand's unique requirements and aesthetics.",
    icon: "💻"
  },
  {
    title: "Theme Customization",
    description: "Modification and enhancement of existing Shopify themes to match your brand identity.",
    icon: "🎨"
  },
  {
    title: "App Development",
    description: "Custom Shopify app development to extend functionality and solve specific business challenges.",
    icon: "📱"
  },
  {
    title: "App Customization",
    description: "Tailoring third-party apps to integrate seamlessly with your store and workflows.",
    icon: "⚙️"
  },
  {
    title: "API Integration",
    description: "Connecting your Shopify store with external services, platforms, and APIs for enhanced functionality.",
    icon: "🔄"
  },
  {
    title: "Hydrogen Development",
    description: "Building headless Shopify stores with Hydrogen for maximum performance and flexibility.",
    icon: "⚡"
  }
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-sand-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Specialized Shopify development services to help your business thrive online
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif text-gold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
