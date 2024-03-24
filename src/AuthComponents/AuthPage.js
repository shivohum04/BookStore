import React, { useState } from 'react'; // Step 1
import './auth.css';
import Login from './login';
import Signup from './signup';
import BookCard from '../components/bookCard';
import BooksService from '../services/booksService';

function AuthPage() {
  const [activeComponent, setActiveComponent] = useState('signup'); 

  return (
    <div className="AuthPage-main">
      <BookCard></BookCard>
      <BooksService></BooksService>
      <div className='Authpage-parent'>
        <div className='authpage-displaycontrol'>
          <button className='authpage-login-control'onClick={() => setActiveComponent('login')}>login</button> 
          <button className='authpage-signup-control'onClick={() => setActiveComponent('signup')}>signup</button> 
        </div>
        {activeComponent === 'login' ? <Login/> : <Signup/>} 
      </div>
      <div className='authpage-pic-container'>
        <div className='authpage-pic-circle'>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
