
import React from 'react';

const products = [
  {
    id: 1,
    name: 'T-shirt special edition',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=300',
    price: 49.99,
    sale: 39.99
  },
  {
    id: 2,
    name: 'Sweater with fur',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=300',
    price: 129.99,
    sale: 99.99
  },
  {
    id: 3,
    name: 'Dark blue jeans',
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=300',
    price: 79.99,
    sale: 59.99
  },
  {
    id: 4,
    name: 'Man\'s Denim Jacket',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=300',
    price: 159.99,
    sale: 129.99
  },
  {
    id: 5,
    name: 'Dark wash jeans',
    image: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=300',
    price: 89.99,
    sale: 69.99
  },
  {
    id: 6,
    name: 'Jacket Denim',
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=300',
    price: 149.99,
    sale: 118.99
  },
  {
    id: 7,
    name: 'T-shirt variant B',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=300',
    price: 39.99,
    sale: 29.99
  },
  {
    id: 8,
    name: 'Simple t-shirt',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=300',
    price: 34.99,
    sale: 24.99
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <div className="border border-sand-300 p-2 flex flex-col">
      <div className="bg-sand-50 w-full aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pt-3 pb-2">
        <h3 className="text-gold font-medium text-sm">{product.name}</h3>
        <div className="flex justify-between items-center mt-1">
          <div className="flex gap-2">
            <span className="text-gray-400 line-through text-xs">${product.price}</span>
            <span className="text-gold font-medium text-sm">${product.sale}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif text-gold mb-8">
        Limited edition clothing signed by<br />Glamouria designer
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
