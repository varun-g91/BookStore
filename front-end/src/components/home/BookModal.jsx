import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-[#FDFFD2] rounded-xl p-4 flex flex-col relative'
            >
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text-red-500 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className='w-fit px-4 py-1 bg-[#667BC6] text-[#FDFFD2] font-mono rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2 font-semibold font-mono text-[#DA7297]'>{book._id}</h4>
                <PiBookOpenTextLight className='text-[#304463] text-2xl' />
                <h2 className='my-1 font-mono font-semibold text-[#DA7297]'>{book.title}</h2>
                <div className='flex justify-start books-center gap-x-2'>
                </div>
                <div className='flex justify-start books-center gap-x-2'>
                    <BiUserCircle className='text-[#304463] text-2xl' />
                    <h2 className='my-1 font-mono font-semibold text-[#DA7297]'>{book.author}</h2>
                </div>
                <p className='my-2 font-mono font-semibold text-[#DA7297]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus repudiandae autem commodi quo, voluptas hic itaque doloribus, unde, incidunt nisi excepturi harum non earum vero! Sapiente nihil porro sunt explicabo?</p>
            </div>
        </div>
    );
};

export default BookModal;
