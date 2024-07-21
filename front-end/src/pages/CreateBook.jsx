import React, { useState } from 'react';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book created successfully', {variant: 'success'});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', {variant: 'error'});       
        console.log(error);
      });
  };

  return (
    <div className='flex flex-col min-h-screen p-4'>
      <div className='w-full max-w-md '>
        <Backbutton />
        <h1 className='text-3xl my-4'>Create Book</h1>
      </div>
      {loading ? <Spinner /> : ''}
      <div className='flex my-10 justify-center w-full'>
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-full max-w-md p-4'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Year of Publish</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateBook;
