import React from 'react';
import { data } from './../data';
import Product from './../components/ProductCart';

function Earrings() {
    const ringsData = data.filter((product) => product.type === 'earring');

    const shuffledData = [...ringsData];
    

    const selectedProducts = shuffledData.slice(0, 10);

    return (
        <section className='itemsection'>
            <div style={{marginTop:'100px'}}>
                <h1 style={{ color: 'black' }}>Earrings</h1>
            </div>
            <div className="product-showcase">
                {selectedProducts.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
        </section>
    );
}

export default Earrings;
