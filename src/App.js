import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useActionData } from 'react-router-dom';
import AuthPage from './AuthComponents/AuthPage';
import BookShow from './screens/bookShow';
import BookCart from './screens/bookCart';
import OrderSuccess from './screens/orderSucess';
import Navbar from './components/navbar';
import Profile from './screens/profile';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Navbar onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/books" element={<BookShow searchQuery={searchQuery} />} />
        <Route path="/cart" element={<BookCart />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
