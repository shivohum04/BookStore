import React from 'react'
import Navbar from '../components/navbar'
import Cart from '../components/cart'
import { useNavigate } from 'react-router-dom';
import { render } from 'react-dom';

export default function BookCart() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem('token');
  if(!token){
    navigate('/');
  }
  return (
    <div>
      <Navbar/>
      <Cart/>
    </div>
  )
}
