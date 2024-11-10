import React from "react";

const Services = () => {
  return (
    <div>
        {/* header */}
      <div className="text-center">
        <h1 className="text-6xl font-serif">Our Services</h1>
        <h3 className="text-2xl satisfy-regular font-thin">"Every moment we capture is a story waiting to be told"</h3>
      </div>
      {/* services */}
      <div className="flex justify-evenly mt-8 text-center text-xl dancing-script-unique">
        <div className="">
            <div className="w-52 h-72 bg-cover mb-2" style={{'backgroundImage':"URL('./public/i3.jpeg')"}}></div>
            <p>PRE WEDDING</p>
        </div>
        <div >
            <div className="w-52 h-72 bg-cover mb-2" style={{'backgroundImage':"URL('./public/wedImg.jpg')"}}></div>
            <p>WEDDING</p>
        </div>
        <div>
            <div className="w-52 h-72 bg-cover bg-center mb-2 " style={{'backgroundImage':"URL('./public/property.jpg')"}}></div>
            <p>PROPERTY SHOOTS</p>
        </div>

      </div>
    </div>
  );
};

export default Services;
