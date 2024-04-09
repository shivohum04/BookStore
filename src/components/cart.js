import React, { useEffect, useState } from 'react';
import './cart.css';
import CustomerDetails from './customerDetails';
import MyCartBook from '../extra/myCartBook';
import { getCartItems } from '../services/cardService';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { red } from '@mui/material/colors';
import { colors } from '@mui/material';

export default function Cart() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [showCustomerDetails, setShowCustomerDetails] = useState(false);
    const [showOrderSummaryContent, setShowOrderSummaryContent] = useState(false);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const data = await getCartItems();
                setCartItems(data.result);
            } catch (error) {
                console.log("Fetching cart items failed", error);
            }
        };

        fetchCartItems();
    }, []);

    const handlePlaceOrder1Click = () => {
        setShowCustomerDetails(true);
    };

    const handleContinueClick = () => {
        setShowCustomerDetails(false); 
        setShowOrderSummaryContent(true); 
    };
    const handleOrdered = () =>{
        navigate('/order-success')
    }

    return (
        <div className='cart-main'> 
            <div className='cart-main-title'>HOME / My cart</div>
            <div className='cart-main-mycart'>
                <div className='mycart-upper'>
                    <div className='mycart-upper-title'>My Cart</div>
                    <div className='mycart-upper-location'><LocationOnIcon sx={{color
                    :'#A03037'}}></LocationOnIcon>Select Location</div>
                </div>

                {cartItems.map((item) => (
                    <MyCartBook
                        key={item._id} 
                        cart_id={item._id} 
                        book={item.product_id} 
                        quantityToBuy={item.quantityToBuy}
                    />
                ))}
                {!showCustomerDetails && !showOrderSummaryContent && (
                    <div className='mycart-lowericon'>
                        <button className='mycart-placeOrder1' onClick={handlePlaceOrder1Click}>PLACE ORDER</button>
                    </div>
                )}
            </div>
            <div className='Address-details cart-main-mycart'>
                ADDRESS DETAILS
                {showCustomerDetails && (
                    <CustomerDetails handleContinueClick={handleContinueClick} />
                )}
            </div>
            <div className='order-summary cart-main-mycart'>
                ORDER SUMMARY
                {showOrderSummaryContent && (
                    <>
                        {cartItems.map((item) => (
                    <MyCartBook
                        key={item._id} 
                        cart_id={item._id} 
                        book={item.product_id} 
                        quantityToBuy={item.quantityToBuy}
                    />
                ))}
                        <div className='mycart-lowericon'>
                            <button className='mycart-placeOrder2' onClick={handleOrdered}>CHECKOUT</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
