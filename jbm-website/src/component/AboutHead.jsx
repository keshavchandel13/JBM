import React from "react";

const AboutHead = () => {
  return (
    <div>
      <div
        className="parallax p-10 flex flex-col items-center justify-center text-center h-[400px] text-white text-purple-800"
        style={{
          backgroundImage: 'url("/i11.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        {/* Heading of the about section */}
        <div className="text-6xl font-bold mb-4">ABOUT US</div>
        <p className="text-2xl italic">"A Glimpse into Our Story"</p>
      </div>
    </div>
  );
};

export default AboutHead;
