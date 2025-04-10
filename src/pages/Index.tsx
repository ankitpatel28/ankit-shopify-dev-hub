
import React from 'react';
import HeroSection from '../components/HeroSection';
import IdentitySection from '../components/IdentitySection';
import ProductSection from '../components/ProductSection';
import TestimonialSection from '../components/TestimonialSection';
import FashionWeekSection from '../components/FashionWeekSection';
import NewsletterSection from '../components/NewsletterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-sand-100">
      <HeroSection />
      <IdentitySection />
      <ProductSection />
      <TestimonialSection />
      <FashionWeekSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;
