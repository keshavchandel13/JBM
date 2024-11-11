import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='border p-4 mt-2 bg-orange-200 text-lg top-0 z-50'>
      <ul className='flex flex-col md:flex-row justify-center gap-6 md:gap-20 font-semibold text-center'>
        <li className='hover:scale-110 transition-transform ease-linear cursor-pointer hover:underline'>
          <Link to="">Home</Link>
        </li>
        <li className='hover:scale-110 transition-transform ease-linear cursor-pointer hover:underline'>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className='hover:scale-110 transition-transform ease-linear cursor-pointer hover:underline'>
          <Link to="/about-us">About Us!</Link>
        </li>
        <li className='hover:scale-110 transition-transform ease-linear cursor-pointer hover:underline'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
