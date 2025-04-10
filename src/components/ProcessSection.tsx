
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const processList = [
  { 
    number: "01",
    title: "Discovery & Planning", 
    description: "Understanding your business goals, target audience, and specific requirements to create a detailed project roadmap."
  },
  { 
    number: "02",
    title: "Design & Wireframing", 
    description: "Creating intuitive user experiences and attractive interfaces that align with your brand identity."
  },
  { 
    number: "03",
    title: "Development", 
    description: "Building custom themes, apps, or integrations using Shopify's best practices and latest technologies."
  },
  { 
    number: "04",
    title: "Testing & QA", 
    description: "Rigorous testing across devices and browsers to ensure a flawless shopping experience."
  },
  { 
    number: "05",
    title: "Launch & Support", 
    description: "Seamless deployment followed by dedicated ongoing support and maintenance services."
  }
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const scrollPosition = window.scrollY;
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
        const offset = scrollPosition - sectionPosition;
        
        if (offset > 0 && offset < window.innerHeight) {
          const lines = section.querySelectorAll('.process-line');
          lines.forEach(line => {
            const progress = Math.min(1, offset / (window.innerHeight * 0.7));
            line.style.width = `${progress * 100}%`;
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-8 bg-sand-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">Development Process</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A structured approach to ensure successful project delivery
          </p>
        </div>

        <div ref={ref} className="space-y-16">
          {processList.map((process, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-start gap-8"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-sand-400 flex items-center justify-center">
                  <span className="text-3xl font-serif text-gold">{process.number}</span>
                </div>
                {index < processList.length - 1 && (
                  <div className="h-16 w-0.5 bg-sand-500 mx-auto my-2 md:h-0.5 md:w-16 md:mx-2 md:my-auto"></div>
                )}
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-serif text-gold mb-2">{process.title}</h3>
                <p className="text-gray-700">{process.description}</p>
                {index < processList.length - 1 && (
                  <div className="process-line h-0.5 bg-gold mt-6 opacity-50" style={{ width: '0%', transition: 'width 0.5s ease-out' }}></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
