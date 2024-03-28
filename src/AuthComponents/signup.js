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

  const [showFullNameMessage, setShowFullNameMessage] = useState(false);
  const [showEmailMessage, setShowEmailMessage] = useState(false);
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);
  const [showPhoneMessage, setShowPhoneMessage] = useState(false);

  const handleFocus = (field) => {
    if (field === "fullName") setShowFullNameMessage(true);
    else if (field === "email") setShowEmailMessage(true);
    else if (field === "password") setShowPasswordMessage(true);
    else if (field === "phone") setShowPhoneMessage(true);
  };

  const handleBlur = () => {
    setShowFullNameMessage(false);
    setShowEmailMessage(false);
    setShowPasswordMessage(false);
    setShowPhoneMessage(false);
  };

  const fullNameRegex = /^[A-Z][a-z]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
  const phoneRegex = /^\d{10}$/; 

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
        <input 
          type='text' 
          placeholder='Full Name' 
          value={fullName} 
          onChange={handleNameChange} 
          onFocus={() => handleFocus("fullName")} 
          onBlur={handleBlur}
          className='label signup-fullname' />
        {showFullNameMessage && <div className="input-message">Example: Xyzabc</div>}
      </div>
      <div className="input-container">
        <input 
          type='text' 
          placeholder='Email' 
          value={email} 
          onChange={handleEmailChange}
          onFocus={() => handleFocus("email")} 
          onBlur={handleBlur}
          className='label signup-email' />
        {showEmailMessage && <div className="input-message">Example: xyz@example.com</div>}
      </div>
      <div className="input-container">
        <input 
          type='password' 
          placeholder='Password' 
          value={password} 
          onChange={handlePasswordChange}
          onFocus={() => handleFocus("password")} 
          onBlur={handleBlur}
          className='label signup-password' />
        {showPasswordMessage && <div className="input-message">Example: Xyz@123</div>}
      </div>
      <div className="input-container">
        <input 
          type='text' 
          placeholder='Mobile Number' 
          value={phone} 
          onChange={handleContactChange}
          onFocus={() => handleFocus("phone")} 
          onBlur={handleBlur}
          className='label signup-contact' />
        {showPhoneMessage && <div className="input-message">10 digit Indian phone number</div>}
      </div>
      <button className='signup-signup' onClick={handleSignup}>SignUp</button>
    </div>
  );
}
