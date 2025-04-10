
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ShopifyExpertiseSection from '../components/ShopifyExpertiseSection';
import ProcessSection from '../components/ProcessSection';
import TechnologiesSection from '../components/TechnologiesSection'; 
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-sand-100">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ShopifyExpertiseSection />
      <PortfolioSection />
      <ProcessSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
