import React from 'react';
import './books.css';

export default function BookCard({ title, author, price, discountedPrice, onBookSelect }) {
  return (
    <div className='bookcard-main' onClick={() => onBookSelect({ title, author, price, discountedPrice })}>
      <div className='bookcard-image'>
        {/* Image could go here if you have one */}
      </div>
      <div className='bookcard-details'>
        <div className='bookcard-title'>{title}</div>
        <div className='bookcard-author'>by {author}</div>
        <div className='bookcard-pricing'>
          <div className='bookcard-discountedprice'>Rs. {discountedPrice}</div>
          <div className='bookcard-price'>Rs. {price}</div>
        </div>
      </div>
    </div>
  );
}
