import React, { useState } from 'react';
import Counter from '../extra/counter'
import './bookdetails.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeedbackCard from './feedbackCard';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function BookDetails({bookName, author, price, discountPrice, description, quantity, product_id}) {
  const [showCounter, setShowCounter] = useState(false);
  console.log(product_id)
  return (
    <div className='bookdetail-main'>
      <div className='bookdetail-container1'>
        <div className='bookdetail-imgbox'></div>
        <div className='bookdetail-container1-buttons'>
            {!showCounter && (
              <button className='bookdetails-addtobag' onClick={() => setShowCounter(true)}> ADD TO BAG</button>
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
  );
}
