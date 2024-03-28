import React, { useEffect, useState } from 'react';
import './navbar.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { getCartItems } from '../services/cardService'; 
import Badge from '@mui/material/Badge';

export default function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartCount, setCartCount] = useState(0); 

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await getCartItems();
        const cartcount = data.result.length; 
        console.log(cartcount);
        setCartCount(cartcount); 
      } catch (error) {
        console.log("Fetching cart items failed", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleProfileIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <div className='navbar-main'>
      <div className='navbar-logo' onClick={() => navigate('/books')}>
        <div className='navbar-logo-img'></div>
        <div className='navbar-logo-text'>Bookstore</div>
      </div>
      <input className='navbar-search' type='text' placeholder='Search' />
      <div className='navbar-options'>
        <div className='navbar-profile' onClick={handleProfileIconClick}>
          <PermIdentityIcon />
          <div className='navbar-profile-text'>Profile</div>
        </div>
        <Menu
          id="simple-menu"
          className='navbar-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className='menuitem-profile' onClick={() => handleNavigate('/profile')}>Profile</MenuItem>
          <MenuItem onClick={() => handleNavigate('/orders')}>My Orders</MenuItem>
          <MenuItem onClick={() => handleNavigate('/wishlist')}>My Wishlist</MenuItem>
          <MenuItem onClick={() => handleNavigate('/logout')}>Logout</MenuItem>
        </Menu>
        <div className='navbar-cart' onClick={() => navigate('/cart')}>
        <Badge badgeContent={cartCount}>
                <ShoppingCartIcon color="white" />
          </Badge>
          <div className='navbar-cart-text'> Cart</div>
        </div>
      </div>
    </div>
  );
}
