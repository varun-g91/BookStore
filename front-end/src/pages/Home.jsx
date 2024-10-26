import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from "../components/home/BooksTable";
import BooksCard from '../components/home/BooksCard';
import { useShowType } from '../components/ShowTypeContext';
import Navbar from '../components/home/Navbar';


const Home = ({showType, setShowType}) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className='p-4 bg-[#FFF1DB] min-h-screen m-0 border-t-0 border-8 border-spacing-50 border-[#FFB4C2]'> 
      <div className='flex justify-between items-center gap-x-4'>
        <h1 className='text-3xl text-[#536493] font-mono my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-[#536493] text-4xl' />
        </Link>
      </div>
      {loading ? <Spinner /> : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)}
    </div>
  )
}

export default Home;