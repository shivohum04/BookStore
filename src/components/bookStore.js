import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './bookCard';
import './books.css';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function BookStore({ onBookSelect, searchQuery }) {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(8);
  const [sortOption, setSortOption] = useState('');
  const [displayedBooks, setDisplayedBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book`);
        setBooks(response.data.result);
        setDisplayedBooks(response.data.result);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    getBooks();
  }, []);

  useEffect(() => {
    const filterAndSortBooks = () => {
      let updatedBooks = [...books];

      if (searchQuery) {
        updatedBooks = updatedBooks.filter(book =>
          book.bookName.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (sortOption) {
        updatedBooks = updatedBooks.sort((a, b) => {
          return sortOption === 'highToLow' ? b.discountPrice - a.discountPrice : a.discountPrice - b.discountPrice;
        });
      }

      setDisplayedBooks(updatedBooks);
    };

    filterAndSortBooks();
  }, [searchQuery, sortOption, books]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = displayedBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(displayedBooks.length / booksPerPage)));
  const prevPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));

  const totalPageCount = Math.ceil(displayedBooks.length / booksPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className='bookstore-upper' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: '7vw', marginRight: '7vw', marginTop: '12vh' }}>
        <Typography variant="h5" component="div">Books</Typography>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={sortOption}
            onChange={handleSortChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value=""><em>Sort by Relevance</em></MenuItem>
            <MenuItem value={'highToLow'}>Price: High to Low</MenuItem>
            <MenuItem value={'lowToHigh'}>Price: Low to High</MenuItem>
          </Select>
        </FormControl>
      </div>
      
      <div className='bookstore-grid'>
        {currentBooks.map((book) => (
          <BookCard
            key={book._id}
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
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          sx={{ minWidth: 'auto', m: 1 }}
        >
          <ArrowBackIosNewIcon sx={{ color: currentPage === 1 ? 'grey' : 'red' }} />
        </Button>
        {pageNumbers.map(number => (
          <Button
            key={number}
            onClick={() => paginate(number)}
            sx={{
              color: '#A03037',
              m: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 0, 0, 0.34)',
              },
            }}
          >
            {number}
          </Button>
        ))}
        <Button
          onClick={nextPage}
          disabled={currentPage === totalPageCount}
          sx={{ minWidth: 'auto', m: 1 }}
        >
          <ArrowForwardIosIcon sx={{ color: currentPage === totalPageCount ? 'grey' : 'red' }} />
        </Button>
      </Box>
    </div>
  );
}
