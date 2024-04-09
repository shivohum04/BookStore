import React, { useState } from 'react';
import Counter from '../extra/counter';
import { addToCart } from '../services/cardService';
import './bookdetails.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeedbackCard from './feedbackCard';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useNavigate } from 'react-router-dom';

export default function BookDetails({bookName, author, price, discountPrice, description, quantity, product_id}) {
  const navigate = useNavigate();
  const [showCounter, setShowCounter] = useState(false);
  console.log(product_id)
  // add to cart directly
  const handleAddToCart = async () => {
    try {
      setShowCounter(true);
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
    <div className='bookdetail-super'>
      <div className='bookdetail-title'><span onClick={() => window.location.href = '/books'} className='bookdetails-refresh'>HOME</span>/ books</div>
      <div className='bookdetail-main'>
        <div className='bookdetail-container1'>
          <div className='bookdetail-imgbox'></div>
          <div className='bookdetail-container1-buttons'>
              {!showCounter && (
                <button className='bookdetails-addtobag' onClick={handleAddToCart}> ADD TO BAG</button>
              )}
              {showCounter && <Counter product_id={product_id} maxQuantity={quantity} />}
              <button className='bookdetails-wishlist'> <FavoriteIcon/> <span>WISHLIST</span></button>
          </div>  
        </div>
        <div className='bookdetail-container2'>
          <div className='bookdetails-title'>{bookName}</div>
          <div className='bookdetails-author'>by {author}</div>
          <div className='bookcard-pricing'>
              <div className='bookdetails-discountedprice'>Rs.{discountPrice}</div>
              <div className='bookdetails-price'>Rs.{price}</div>
          </div>
          <div className='bookdetails-randomline'></div>
          <div className='bookdetails-description'>
            <div className='bookdetails-desc-title'>Book Detail</div>
            <div className='bookdetails-desc-desc'>{description}</div>
          </div>
          <div className='bookdetails-randomline'></div>
          <div className='bookdetails-feedback'>
              <div className='bookdetails-feedback-title'><h4>Customer Feedback</h4></div>
              <div className='feedback-box'>
                  Overall rating
                  <div className='bookdetails-rating'>
                    <StarOutlineIcon/>
                    <StarOutlineIcon/>
                    <StarOutlineIcon/>
                    <StarOutlineIcon/>
                    <StarOutlineIcon/>

                  </div>
                  <input type='text' placeholder='write your review' className='feedback-description'></input>
                  <button className='feedback-submit'>submit</button>
              </div>
              <FeedbackCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
