import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './AuthComponents/AuthPage';
import BookShow from './screens/bookShow';
import BookCart from './screens/bookCart';
import OrderSuccess from './screens/orderSucess';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/books" element={<BookShow />} />
        <Route path="/cart" element={<BookCart />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
