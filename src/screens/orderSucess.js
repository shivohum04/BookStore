import React from 'react'
import '../components/ordered.css'
import { useNavigate } from 'react-router-dom';
export default function OrderSuccess() {
    const navigate = useNavigate();
    const handleContinueShopping=()=>{
        navigate('/books')
    }
  return (
    <div>
      <div className='ordered-main'>
        <div className='ordered-image'>

        </div>
        <div className='ordered-content'>
            <p>hurray!! your order is confirmed.<br></br> the order id is #79977 save the order id for further communication</p>
        </div>
        <div className='ordered-contact'>
            <div className='ordered-contact-header'>
                <div className='header-email'>
                    Email Us
                </div>
                <div className='header-contact'>
                    Contact Us
                </div>
                <div className='header-address'>
                    Address
                </div>
            </div>
            <div className='ordered-contact-body'>
                <div className='lower-email'>
                    admin@bookstore.com
                </div>
                <div className='lower-contact'>
                    +91 7999524231
                </div>
                <div className='lower-address'>
                    41no. block 304 muhoka patna jaipur RJ
                </div>
            </div>
        </div>
        <div className='ordered-lowerbutton'>
            <button onClick={handleContinueShopping} className='ordered-continueshopping'>
                CONTINUE
            </button>
        </div>
      </div>
    </div>
  )
}
