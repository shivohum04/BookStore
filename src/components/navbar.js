import React, { useEffect, useState } from 'react';
import './navbar.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setCartCount } from '../redux/actions/cartActions';
// Make sure getCartItems is only imported once
import { getCartItems } from '../services/cardService'; 

export default function Navbar({onSearch}) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const cartCount = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await getCartItems();
        // Update the cart count in Redux store
        dispatch(setCartCount(data.result.length));
      } catch (error) {
        console.error("Fetching cart items failed", error);
      }
    };

    fetchCartItems();
  }, [dispatch]);

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
      <input
  className='navbar-search'
  type='text'
  placeholder='Search'
  onChange={(e) => onSearch(e.target.value)} 
/>
      <div className='navbar-options'>
        <div className='navbar-profile' onClick={handleProfileIconClick}>
          <PermIdentityIcon />
          <div className='navbar-profile-text'>Profile</div>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleNavigate('/profile')}>Profile</MenuItem>
          <MenuItem onClick={() => handleNavigate('/orders')}>My Orders</MenuItem>
          <MenuItem onClick={() => handleNavigate('/wishlist')}>My Wishlist</MenuItem>
          <MenuItem onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}>Logout</MenuItem>
        </Menu>
        <div className='navbar-cart' onClick={() => navigate('/cart')}>
          <Badge badgeContent={cartCount} color="primary">
            <ShoppingCartIcon />
          </Badge>
          <div className='navbar-cart-text'>Cart</div>
        </div>
      </div>
    </div>
  );
}
