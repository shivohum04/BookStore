// counter.js
import React, { useState } from 'react';
import { addToCart } from '../services/cardService';
import { useLocation } from 'react-router-dom'; 
import './counter.css'
import { useNavigate } from 'react-router-dom';

export default function Counter({ product_id, maxQuantity }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const location = useLocation();


  const incrementCount = () => {
    if (count < maxQuantity) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
        console.log(product_id)
      const response = await addToCart({ product_id });
      console.log(response);
      alert('Added to cart successfully');
      navigate('/cart')
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart');
    }
  };

  return (
    <div className="counter-container">
      <button className='decrement' onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button  className='increment' onClick={incrementCount}>+</button>
      {location.pathname === '/books' && (
        <button className='addtocart-counter'onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
}
