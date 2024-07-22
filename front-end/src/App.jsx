import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import { ShowTypeProvider } from './components/ShowTypeContext';
import Navbar from './components/home/Navbar';

const App = () => {
  const [showType, setShowType] = useState('table');

  return (
    <ShowTypeProvider>
      <Navbar setShowType={setShowType}/>
      <Routes>
        <Route path='/' element={<Home showType={showType} setShowType={setShowType}  />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
      </Routes>
    </ShowTypeProvider>
  );
};

export default App;