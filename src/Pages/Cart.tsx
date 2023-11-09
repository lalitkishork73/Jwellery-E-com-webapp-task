import React from 'react';
import { useCart } from '../CartContext';

const CartPage = () => {
    const { cartState, dispatch } = useCart(); // Access the cartState and dispatch

    const handleRemoveItem = (itemId: any) => {
        // Dispatch the action to remove an item from the cart
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
    };

    console.log(cartState.items);
    return (
        <div className="cartpage">
            <div className='cartpageOuter'>
                <h2 style={{textAlign:'center'}}>Your Cart</h2>
                <ul>
                    {cartState.items.map((item: any) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div className='cartCard'>
                                <h3>{item.name}</h3>
                                <p>Price: ₹ {item.price}</p>
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CartPage;
