import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsappSquare } from "react-icons/fa";

const TopBar = () => {
  return (
    <div id="top-head" className="flex flex-col md:flex-row justify-between items-center p-2 bg-gray-100 mt-1">
      
      {/* Address */}
      <div className="flex items-center mb-2 md:mb-0 ml-3">
        <div className="text-3xl text-red-500 ">
          <FaLocationDot />
        </div>
        <div className="ml-2 text-center md:text-left text-sm md:text-base">
          JBM Photos & Studio, Sultanpur, Chamba <br /> Himachal Pradesh 176314
        </div>
      </div>

      {/* Logo */}
      <div className="w-32 h-12 mx-0 mix-blend-multiply md:mx-10 mb-2 md:mb-0">
        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
      </div>

      {/* Contact number */}
      <div className="flex items-center mb-2 md:mb-0 mr-3">
        <div className="text-2xl text-blue-500 mr-1">
          <IoCall />
        </div>
        <div className="text-sm md:text-base">8278779865</div>
      </div>

      {/* Social media */}
      <div className="flex gap-2 items-center">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 hover:text-blue-900 transition duration-300">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl text-red-700 hover:text-red-500 transition duration-300">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-400 hover:text-blue-600 transition duration-300">
          <FaTwitter />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-xl text-green-600 hover:text-green-500 transition duration-300">
          <FaWhatsappSquare />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
