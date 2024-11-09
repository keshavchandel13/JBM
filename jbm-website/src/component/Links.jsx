import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Links = () => {
  return (
    <div className="flex flex-row justify-evenly mt-6 mb-12">
      {/* address */}
      <div className="flex flex-col">
        <div className="place-items-center  text-6xl mb-4"><FaLocationDot /></div>
        <div> JBM Photos & Studio Sultanpur, Chamba <br /> Himachal Pradesh 176314</div>
      </div>
      {/* Phone */}
      <div>
        <div className="place-items-center  text-6xl mb-4"><IoCall /></div>
        <div>8278779865</div>
      </div>
      {/* Email */}
      <div>
        <div className="place-items-center  text-6xl mb-4"><MdOutlineMail /></div>
        <div>chandelkeshav4@gmail.com</div>
      </div>
    </div>
  );
};

export default Links;
