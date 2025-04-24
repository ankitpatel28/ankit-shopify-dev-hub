
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ShopifyExpertiseSection from '../components/ShopifyExpertiseSection';
import PortfolioSection from '../components/PortfolioSection';
import ProcessSection from '../components/ProcessSection';
import TechnologiesSection from '../components/TechnologiesSection'; 
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-sand-100 pt-16">
      <Header />
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
