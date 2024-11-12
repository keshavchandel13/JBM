import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <footer className="bg-gray-100 p-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start mt-6 gap-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <img
            src="/logo.png"
            alt="Logo-jbm"
            className="h-16 mb-2 mix-blend-multiply"
          />
          <p className="text-center lg:text-left text-xl">
            JBM
            <br />
            PHOTOS & STUDIO
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col space-y-4 mb-6 lg:mb-0 lg:mx-12">
          <h2
            className="text-3xl md:text-5xl font-semibold satisfy-regular mb-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block"
            style={{ color: "#4D3529" }}
          >
            <span className="relative text-white">Quick Links</span>
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start md:space-x-8">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-700 hover:text-gray-900">
                  Homepage
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-700 hover:text-gray-900">
                  About Us
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-700 hover:text-gray-900">
                  Pre & Post Wedding
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-4 md:space-x-6 justify-center text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/jbmphotos_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600"
          >
            <FaInstagram />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
          >
            <FaWhatsappSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default QuickLinks;
