import React from 'react';
import Counter from '../extra/counter'; 
import '../components/cart.css'
import { removeCartItem } from '../services/cardService';

export default function MyCartBook({ cart_id,book, quantityToBuy }) {
    console.log(cart_id)
    const handleRemoveItem = async() =>{
        try{
            const response = await removeCartItem({cart_id})
            console.log(response)
            alert('item deleted successfully')
            window.location.reload();

        }catch(error){
            console.log(error)
        }
    };
    return (
        <div className='mycart-book'>
            <div className='mycart-book-image'>
            </div>
            <div className='mycart-book-details'>
                <div className='book-details-title'>{book?.bookName}</div>
                <div className='book-details-author'>{book?.author}</div>
                <div className='book-details-pricing'>
                    <div className='book-details-discountedprice'>Rs.{book?.discountPrice}</div>
                    <div className='book-details-price'>Rs.{book?.price}</div>
                </div>
                <div className='book-details-lowericons'>
                    <Counter bookId={book?._id} maxQuantity={book?.quantity} quantity={quantityToBuy}/>
                    <div className='mycart-book-remove'>
                        <button onClick={handleRemoveItem} className='book-details-removebutton'>Remove</button>
                    </div>
                </div>  
            </div>
        </div>
    );
}