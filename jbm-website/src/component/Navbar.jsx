import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b shadow-lg p-4 bg-gradient-to-r from-orange-300 to-orange-500 text-lg top-0 z-50">
      <ul className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-4 md:gap-12 font-semibold text-white">
        <li className="hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer hover:text-yellow-200">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer hover:text-yellow-200">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer hover:text-yellow-200">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer hover:text-yellow-200">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
