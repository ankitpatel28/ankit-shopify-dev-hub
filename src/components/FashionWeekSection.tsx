
import React from 'react';

const fashionStories = [
  {
    id: 1,
    title: 'Copenhagen Fashion Week Spring',
    image: 'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?q=80&w=400',
  },
  {
    id: 2,
    title: 'The Epicenter of the Top Fashion Weeks',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=400',
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Top Fashion Weeks',
    image: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=400',
  },
];

const FashionStoryCard = ({ story }: { story: typeof fashionStories[0] }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full aspect-[3/4] overflow-hidden">
        <img 
          src={story.image} 
          alt={story.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-gold font-serif text-lg mt-3">{story.title}</h3>
    </div>
  );
};

const FashionWeekSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif text-gold mb-8">
        Top Fashion Moments<br />From Fashion Week
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fashionStories.map(story => (
          <FashionStoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
};

export default FashionWeekSection;
