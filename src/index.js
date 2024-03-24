import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthPage from './AuthComponents/AuthPage';
import reportWebVitals from './reportWebVitals';
import BookShow from './screens/bookShow';
import BookInfo from './screens/bookInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookShow />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
