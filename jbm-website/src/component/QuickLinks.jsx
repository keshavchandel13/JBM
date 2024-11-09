import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-100 p-3">
      <div className="container mx-auto flex justify-between items-start mt-6 ">
        {/* Logo Section */}
        <div className="flex flex-col items-center mt-4 ">
          <img
            src="./public/logo.png"
            alt="Logo"
            className="h-16 mb-2  mix-blend-multiply"
          />
          <p className="text-center text-xl">
            JBM
            <br />
            PHOTOS & STUDIO
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-5xl font-semibold satisfy-regular mb-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block" style={{'color':'#4D3529'}}>
           <span className="relative text-white"> Quick Links </span>
          </h2>
          <div className="flex space-x-12">
            <ul className="space-y-2">
              <li>
                <a
                  href="#homepage"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Homepage
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="text-gray-700 hover:text-gray-900"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#special-recognition"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Special Recognition
                </a>
              </li>
              <li>
                <a
                  href="#achievement"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Achievement
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact-us"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#pre-post-wedding"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Pre & Post Wedding
                </a>
              </li>
              <li>
                <a
                  href="#wedding"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Wedding
                </a>
              </li>
              <li>
                <a
                  href="#fashion"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Fashion
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-4 p-12 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsappSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
