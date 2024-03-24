import React from 'react'
import './bookdetails.css'

export default function BookDetails({bookName,author,price,discountPrice,description}) {
  console.log("BookDetails Props", { bookName, author, price, discountPrice });
  return (
    <div className='bookdetail-main'>
      <div className='bookdetail-container1'>
        <div className='bookdetail-imgbox'></div>
        <div className='bookdetail-container1-buttons'>
            <button className='bookdetails-addtobag'>Add To Bag</button>
            <button className='bookdetails-wishlist'>Wishlist</button>
        </div>
      </div>
      <div className='bookdetail-container2'>
        <div className='bookdetails-title'>{bookName}</div>
        <div className='bookdetails-author'>by {author}</div>
        <div className='bookcard-rating'>
            <div className='bookcard-rating-star'>4.5</div>
            <div className='bookcard-rating-outof'>(20)</div>
        </div>
        <div className='bookcard-pricing'>
            <div className='bookdetails-discountedprice'>Rs.{discountPrice}</div>
            <div className='bookdetails-price'>Rs.{price}</div>
        </div>
        <div className='bookdetails-description'>{description}</div>
        <div className='bookdetails-feedback'>
            <div className='bookdetails-feedback-title'>Customer Feedback</div>
            <div className='feedback-box'>
                Overall rating
                <input type='text' className='feedback-description'></input>
                <button className='feedback-submit'>submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}
