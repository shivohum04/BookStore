import React from 'react'
import TextField from '@mui/material/TextField';
import './navbar.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {

  return (
    <div>
      <div className='navbar-main'>
        <div className='navbar-logo'>
            <div className='navbar-logo-img'>
                
            </div>
            <div className='navbar-logo-text'>Bookstore</div>
        </div>
        <input className='navbar-search' type='text' placeholder='search'></input>
        <div className='navbar-options'>
            <div className='navbar-profile'><PermIdentityIcon/><div className='navbar-profile-text'>profile</div></div>
            <div className='navbar-cart'><ShoppingCartIcon/><div className='navbar-cart-text'>cart</div></div>
        </div>  
      </div>
    </div>
  )
}
