import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
const TopBar = () => {
  return (
    <div className="flex flex-row  align-center mt-1">
        
      {/* Address */}

      <div className="flex items-center ml-3">
        <div className="h-12 w-12 text-3xl mt-2">
          <FaLocationDot />
        </div>
        <div className="ml-1">
          JBM Photos & Studio Sultanpur, Chamba <br /> Himachal Pradesh 176314
        </div>
      </div>

      {/* logo */}

      <div className=" w-32 h-12 mx-60 mix-blend-multiply">
        {" "}
        <img src="./public/logo.PNG" alt="" />
      </div>

      {/* contact number */}

      <div className="flex items-center mr-10">
        <div className="mr-1 text-2xl">
          <IoCall />
        </div>
        <div>8278779865</div>
      </div>

      {/* Social media */}

      <div className="flex gap-2 items-center">
        <div className="text-xl "><a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a></div>
        <div className="text-xl"><a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a></div>
        <div className="text-xl"> <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a></div>
        <div className="text-xl"> <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsappSquare />
          </a></div>
      </div>
    </div>
  );
};

export default TopBar;
