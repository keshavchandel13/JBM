import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      {/* header */}
      <div className="text-center">
        <h1 className="text-4xl font-serif sm:text-2xl  md:text-6xl">
          Our Services
        </h1>
        <h3 className="text-sm satisfy-regular font-thin">
          "Every moment we capture is a story waiting to be told"
        </h3>
      </div>
      {/* services section */}
      <div className="flex justify-evenly mt-8 text-center text-base sm:text-lg md:text-xl dancing-script-unique sm:flex-col md:flex-row gap-4">
        <Link to={"/portfolio"} className="w-full sm:w-64 md:w-52 lg:w-64">
          <div className="hover-overlay">
            <div
              className="w-full h-56 sm:h-64 md:h-72 bg-cover mb-2"
              style={{ backgroundImage: "URL('/i2.jpeg')" }}
            ></div>
            <p className="sm:text-base md:text-lg lg:text-xl">PRE WEDDING</p>
          </div>
        </Link>
        <Link to={"/portfolio"} className="w-full sm:w-64 md:w-52 lg:w-64">
          <div className="hover-overlay">
            <div
              className="w-full h-56 sm:h-64 md:h-72 bg-cover mb-2"
              style={{ backgroundImage: "URL('/wedImg.jpg')" }}
            ></div>
            <p className="sm:text-base md:text-lg lg:text-xl">WEDDING</p>
          </div>
        </Link>
        <Link to={"/portfolio"} className="w-full sm:w-64 md:w-52 lg:w-64">
          <div className="hover-overlay">
            <div
              className="w-full h-56 sm:h-64 md:h-72 bg-cover bg-center mb-2"
              style={{ backgroundImage: "URL('/property.jpg')" }}
            ></div>
            <p className="sm:text-base md:text-lg lg:text-xl">
              PROPERTY SHOOTS
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
