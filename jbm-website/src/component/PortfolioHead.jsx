import React from "react";

const PortfolioHead = () => {
  return (
    <div>
      <div
        className="parallax p-10 flex flex-col items-center justify-center text-center h-[400px] text-white text-purple-800"
        style={{
          backgroundImage: 'url("./public/i11.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Heading of the portfolio */}
        <div className="text-6xl font-bold mb-4">PORTFOLIO</div>
        <p className="text-2xl italic mb-6">"Capturing moments, one shot at a time"</p>
        
        {/* Social media links */}
        <div className="mb-6">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-purple-600">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-purple-600">
            Facebook
          </a>
        </div>

        {/* Call to action button */}
        <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-all">
          View My Work
        </a>
      </div>
    </div>
  );
};

export default PortfolioHead;
