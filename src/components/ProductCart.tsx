import React from 'react'
import { useCart } from '../CartContext';


const Products = (data: any) => {
    const { dispatch } = useCart();

    const handleAddToCart = () => {

        dispatch({ type: 'ADD_TO_CART', payload: data.product });
    };


    return (
        <div className="product">
            <img src={data.product.image} alt={data.product.name} />
            <div className="product-details">
                <h3 style={{ color: "#FCCC00" }}>{data.product.name}</h3>
                <p style={{ fontWeight: 'bold' }}>₹ {data.product.price}</p>
            </div>
            <div className="hover-details">
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;