
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Luxury Apparel Store",
    category: "theme",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    description: "Custom theme development for a high-end fashion brand with advanced filtering and lookbook features."
  },
  {
    title: "Artisanal Food Marketplace",
    category: "app",
    image: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010",
    description: "Custom app development for a multi-vendor marketplace selling artisanal food products."
  },
  {
    title: "Beauty Products Subscription",
    category: "integration",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
    description: "API integration for a beauty product subscription service connecting inventory, CRM, and fulfillment systems."
  },
  {
    title: "Furniture Showroom",
    category: "hydrogen",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    description: "Hydrogen headless commerce implementation for a furniture retailer with 3D product visualization."
  },
  {
    title: "Sports Equipment Store",
    category: "theme",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    description: "Theme customization for a sports equipment retailer with advanced product comparison features."
  },
  {
    title: "Handcrafted Jewelry",
    category: "app",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
    description: "Custom app for a jewelry brand enabling customers to design their own pieces."
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "theme", label: "Theme Development" },
  { id: "app", label: "App Development" },
  { id: "integration", label: "API Integration" },
  { id: "hydrogen", label: "Hydrogen/Headless" }
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 px-4 md:px-8 bg-sand-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Featured Shopify projects showcasing expertise across themes, apps, and integrations
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 border ${
                activeCategory === category.id 
                  ? 'border-gold bg-gold text-white' 
                  : 'border-gold text-gold hover:bg-gold/10'
              } transition-colors duration-300 text-sm rounded-full`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ 
                    transform: hoveredProject === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="px-3 py-1 bg-gold text-white text-xs rounded-full uppercase">
                      {categories.find(cat => cat.id === project.category)?.label}
                    </span>
                    <h3 className="text-xl text-white mt-2">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{project.description}</p>
                <button className="mt-4 btn-outline w-full">View Details</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
