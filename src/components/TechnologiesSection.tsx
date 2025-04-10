
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const technologies = {
  "Frontend": [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Tailwind CSS", "SCSS"
  ],
  "Shopify": [
    "Liquid", "Theme Kit", "Storefront API", "Admin API", "App Bridge", "Polaris", "GraphQL", "Hydrogen"
  ],
  "Backend": [
    "Node.js", "Express", "Ruby on Rails", "Python", "PHP", "GraphQL", "REST APIs", "WebSockets"
  ],
  "Tools": [
    "Git", "GitHub", "VS Code", "Figma", "Postman", "Docker", "CI/CD", "AWS"
  ]
};

const TechnologiesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const section = sectionRef.current;
      if (!section) return;
      
      const cards = section.querySelectorAll('.tech-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          const rotateX = ((y - rect.height / 2) / rect.height) * 10;
          const rotateY = ((rect.width / 2 - x) / rect.width) * 10;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        } else {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-8 bg-sand-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">Technologies</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Expertise in a wide range of technologies to deliver exceptional Shopify solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(technologies).map(([category, techs], catIndex) => (
            <motion.div
              key={catIndex}
              className="tech-card bg-white p-8 rounded-lg shadow-xl border border-sand-300 hover:shadow-2xl transition-shadow duration-500"
              style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif text-gold mb-6 relative" style={{ transform: 'translateZ(20px)' }}>
                {category}
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gold"></div>
              </h3>
              
              <motion.ul
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {techs.map((tech, techIndex) => (
                  <motion.li 
                    key={techIndex} 
                    className="flex items-center" 
                    variants={itemVariants}
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                    <span className="text-gray-700">{tech}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
