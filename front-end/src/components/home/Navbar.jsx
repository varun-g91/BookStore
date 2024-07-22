import React from 'react';
import { Link } from 'react-router-dom';
import HoverCard from './HoverCard';

const Navbar = ({setShowType}) => {
    return (
        <nav className="bg-[#536493] p-4 border-t-8 border-x-8 border-b-0 border-[#FFB4C2]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-mono font-bold">MyApp</div>
                <ul className="flex space-x-4 font-mono">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/books/create" className="text-white hover:text-gray-300">Create Book</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    </li>
                    <li>
                        <HoverCard setShowType={setShowType} />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
