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

      <div className=" w-32 h-12 mx-60">
        {" "}
        <img src="./public/logo.PNG" alt="" />
      </div>

      {/* contact number */}

      <div className="flex items-center mr-12">
        <div className="mr-1 text-2xl">
          <IoCall />
        </div>
        <div>8278779865</div>
      </div>

      {/* Social media */}

      <div className="flex gap-2 items-center">
        <div className="text-2xl"><FaFacebook /></div>
        <div className="text-2xl"><FaInstagram /></div>
        <div className="text-2xl"><FaTwitter /></div>
        <div className="text-2xl"><FaWhatsappSquare /></div>
      </div>
    </div>
  );
};

export default TopBar;
