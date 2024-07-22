import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { useState } from 'react';
import BookModal from './home/BookModal';


const BookSingleCard = ({ book }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div
            key={book._id}
            className='border-2 bg-[#EF5A6F] border-grey-500 rounded-xl px-4 py-2 m-4 relative hover:shadow-2xl'
        >
            <h2 className='absolute top-1 right-2 px-4 py-1 text-[#D4BDAC] font-mono  bg-[#536493] rounded-xl'>
                {book.publishYear}
            </h2>   
            <h4 className='my-2 text-[#FFF8DB] font-light font-mono'>{book._id}</h4>
            <PiBookOpenTextLight className='text-[#304463] text-2xl' />
            <h2 className='my-1 text-[#FFF8DB] font-mono'>{book.title}</h2>
            <div className='flex justify-start books-center gap-x-2'>
            </div>
            <div className='flex justify-start books-center gap-x-2'>
                <BiUserCircle className='text-[#304463] text-2xl' />
                <h2 className='my-1 font-mono text-[#FFF8DB]'>{book.author}</h2>
            </div>
            <div className='flex justify-between bg-[#FFF1DB] books-center gap-x-2 mt-4 p-4 rounded-xl'>
                <BiShow
                    className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                </Link>
            </div>
            {
                showModal && (
                    <BookModal book={book} onClose={() => setShowModal(false)} />
                )
            }
        </div>
    )
}

export default BookSingleCard