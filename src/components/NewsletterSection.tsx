
import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-sand-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-serif text-gold mb-4">
              Get a 60% discount for the<br />
              first 10 customers who buy<br />
              at Glamouria
            </h2>
          </div>
          <div className="md:w-1/3 w-full flex mt-6 md:mt-0">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow p-3 border border-r-0 border-sand-500 bg-sand-200 focus:outline-none"
            />
            <button className="bg-gold hover:bg-gold-dark text-white px-6 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
