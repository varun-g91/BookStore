import React, { useState, useEffect } from 'react';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response) => {
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      alert('An error occured, Please check the console for more details');
      enqueueSnackbar('Error', { variant: 'error' });
      console.log(error);
    });
  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='flex font-mono flex-col bg-[#FFF1DB] min-h-screen p-4'>
      <div className='w-full max-w-md '>
        <Backbutton />
        <h1 className='text-3xl my-4'>Edit Book</h1>
      </div>
      {loading ? <Spinner /> : ''}
      <div className='flex my-10 justify-center w-full'>
        <div className='flex flex-col border-2 bg-[#EF5A6F] shadow-2xl border-[#536493] rounded-xl w-full max-w-md p-4'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-[#FFF1DB]'>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border-2 bg-[#D4BDAC] border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4  text-[#FFF1DB]'>Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='border-2 bg-[#D4BDAC] border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-[#FFF1DB]'>Year of Publish</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className='border-2 bg-[#D4BDAC] border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <button className='p-2 bg-[#536493] text-[#FFF1DB] m-8 shadow-sm' onClick={handleEditBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBook;
