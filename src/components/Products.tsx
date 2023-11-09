import React from 'react';
import Product from './ProductCart';
import { data } from './../data';



const ProductShowcase = () => {
  
  const shuffledData = [...data];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }

  
  const selectedProducts = shuffledData.slice(0, 10);

  return (
    <section className='productsection'>
      <div>
        <h1 style={{ color: 'black' }}>Products</h1>
      </div>
      <div className="product-showcase">
        {selectedProducts.map((product: any, index: number) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
