import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='border p-4 mt-2 bg-orange-200 text-lg  top-0 z-50'>
      <ul className='flex flex-row justify-center gap-40 font-semibold'>
        <li className='hover:scale-125 transition-transform ease-linear cursor-pointer'>
          <Link to="">Home</Link>
        </li>
        <li className='hover:scale-125 transition-transform ease-linear cursor-pointer'>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className='hover:scale-125 transition-transform ease-linear cursor-pointer'>
          <Link to="/about-us">About Us!</Link>
        </li>
        <li className='hover:scale-125 transition-transform ease-linear cursor-pointer'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
