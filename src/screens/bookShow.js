// bookShow.js
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import BookStore from '../components/bookStore'; 
import BookDetails from '../components/bookDetails'; 

export default function BookShow() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };  
  console.log(selectedBook);


  return (
    <div>
      <Navbar />
      {selectedBook ? (
        <BookDetails
          bookName={selectedBook.bookName}
          author={selectedBook.author}
          price={selectedBook.price}
          discountPrice={selectedBook.discountPrice}
          description={selectedBook.description}
        />
      ) : (
        <BookStore onBookSelect={handleBookSelect} />
      )}
    </div>
  );
}
