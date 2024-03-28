import React, { useState } from 'react';
import './auth.css';
import Login from './login';
import Signup from './signup';

function AuthPage() {
  const [activeComponent, setActiveComponent] = useState('signup'); 

  const isActive = (componentName) => activeComponent === componentName ? 'authpage-control-active' : '';

  return (
    <div className="AuthPage-main">
      <div className='Authpage-parent'>
        <div className='authpage-displaycontrol'>
          <button 
            className={`authpage-login-control ${isActive('login')}`}
            onClick={() => setActiveComponent('login')}>
            Login
          </button> 
          <button 
            className={`authpage-signup-control ${isActive('signup')}`}
            onClick={() => setActiveComponent('signup')}>
            Signup
          </button> 
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
