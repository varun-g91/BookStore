import React, { useState, useEffect } from 'react';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from "notistack";
       

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();


  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='min-h-screen font-mono bg-[#FFF1DB] p-4'>
      <Backbutton />
      <h1 className='text-3xl font-mono my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col bg-white items-center border-2 border-[#536493] rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl text-[#536493] text-center font-mono'>Are you sure you want to delete this book?</h3>

        <button
          className='p-4 bg-red-600 rounded-xl text-[#FFF1DB] font-mono m-8 w-full'
          onClick={handleDeleteBook}
        >
          Yes, Delete book
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;
