import React, { useState } from 'react';
import './auth.css'; 
import { signupUser } from '../services/userService';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [fullNameValid, setFullNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);

  const fullNameRegex = /^[A-Z][a-z]{3,}$/; // First letter capital, more than 3 alphabets, no spaces
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
  const phoneRegex = /^\d{10}$/; // 10 digit phone number

  const handleNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    setFullNameValid(fullNameRegex.test(value));
  };
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
  const handleContactChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setPhoneValid(phoneRegex.test(value));
  };

  const handleSignup = async () => {
    if (fullNameValid && emailValid && passwordValid && phoneValid) {
      const userObject = { fullName, email, password, phone };
      try {
        const response = await signupUser(userObject);
        console.log(response);
      } catch (error) {
        console.error(error);
      
      }
    } else {
 
      console.log('Validation failed');
    }
  };

  return (
    <div className='signup-main'>
      <div className="input-container">
        <input type='text' placeholder='Full Name' value={fullName} onChange={handleNameChange} className='label signup-fullname' />
        {fullNameValid && <span className="valid-indicator">&#10003;</span>}
      </div>
      <div className="input-container">
        <input type='text' placeholder='Email' value={email} onChange={handleEmailChange} className='label signup-email' />
        {emailValid && <span className="valid-indicator">&#10003;</span>}
      </div>
      <div className="input-container">
        <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} className='label signup-password' />
        {passwordValid && <span className="valid-indicator">&#10003;</span>}
      </div>
      <div className="input-container">
        <input type='text' placeholder='Mobile Number' value={phone} onChange={handleContactChange} className='label signup-contact' />
        {phoneValid && <span className="valid-indicator">&#10003;</span>}
      </div>
      <button className='signup-signup' onClick={handleSignup}>SignUp</button>
    </div>
  );
}
