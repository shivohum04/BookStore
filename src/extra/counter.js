// counter.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import './counter.css'
import { useNavigate } from 'react-router-dom';
import { updateCartItem } from '../services/cardService';

export default function Counter({ cartID,bookID, maxQuantity }) {
  console.log(bookID)
  console.log(cartID)
  console.log(maxQuantity)
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
  useEffect(() => {
    const updateCart = async () => {
      try {
        // Assuming `product_id` is the `cart_id` you need to pass to `updateCartItem`
        // If it's not, you'll need to adjust this to get the correct ID
        await updateCartItem({ cart_id: bookID, count });
        console.log('Cart updated successfully');
      } catch (error) {
        console.error('Error updating cart item:', error);
      }
    };

    if (count > 0) {
      updateCart();
    }
  }, [count, bookID]); // This effect depends on `count` and `product_id`

  

  return (
    <div className="counter-container">
      <div className='counter-upper'>
        <button className='decrement' onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button  className='increment' onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}
