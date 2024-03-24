import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './bookCard'; 
import './books.css'; 

export default function BookStore({ onBookSelect }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {

      try {
        const response = await axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book`);
        setBooks(response.data.result);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    getBooks();
  }, []);

  return (
    <div>
      <div className='bookstore-title'>Books</div>
      <div className='bookstore-grid'>
        {books.map((book) => (
          <BookCard
            key={book.bookId}
            title={book.bookName}
            author={book.author}
            price={book.price}
            description={book.description}
            quantity={book.quantity}
            discountedPrice={book.discountPrice}
            onBookSelect={() => onBookSelect(book)}
          />
        ))}
      </div>
    </div>
  );
}
