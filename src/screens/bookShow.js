// bookShow.js
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import BookStore from '../components/bookStore'; 
import BookDetails from '../components/bookDetails'; 
import '../components/books.css'

export default function BookShow() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };  
  console.log(selectedBook);


  return (
    <div>
      <Navbar onSearch={setSearchQuery} />
      {selectedBook ? (
        <BookDetails
          bookName={selectedBook.bookName}
          author={selectedBook.author}
          price={selectedBook.price}
          discountPrice={selectedBook.discountPrice}
          description={selectedBook.description}
          quantity={selectedBook.quantity}
          product_id={selectedBook._id}
        />
      ) : (
        <BookStore onBookSelect={handleBookSelect} searchQuery={searchQuery} />
      )}
    </div>
  );
}
