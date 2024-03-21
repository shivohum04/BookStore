import React, { useState } from 'react';
import './auth.css';
import { loginUser } from '../services/userService';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [error, setError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(emailRegex.test(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(passwordRegex.test(value));
  };

  const handleLogin = async () => {
    if (!emailValid || !passwordValid) {
      setError('Please ensure all fields are correctly filled.');
      return;
    }

    const userObject = { email, password };
    try {
      const response = await loginUser(userObject);
      console.log(response);
      setError(''); 
    } catch (error) {
      setError('Failed to login. Please check your credentials.'); 
    }
  };

  return (
    <div className='login-main'>
      <div className='input-container'>
        <input
          type='text'
          placeholder='email'
          className='login-email'
          value={email}
          onChange={handleEmailChange}
        />
        {emailValid && <span className="valid-indicator">&#10003;</span>}
      </div>
      <div className='input-container'>
        <input
          type='password'
          placeholder='password'
          className='login-password'
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordValid && <span className="valid-indicator">&#10003;</span>}
      </div>
      <button
        className='login-login'
        onClick={handleLogin}
      >
        Login
      </button>
      {error && <div className="error">{error}</div>}
      <h3>---or---</h3>
      <div className='login-lower'>
        <button className='login-lower-fb'>Facebook</button>
        <button>Google</button>
      </div>
    </div>
  )
}
