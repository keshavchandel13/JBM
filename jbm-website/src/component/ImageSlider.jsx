import React, { useState, useEffect } from 'react';
const ImageSlider = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Auto-switch images based on interval
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
      return () => clearInterval(timer); // Clean up the interval on component unmount
    }, [images.length, interval]);
  
    // Functions for manual navigation
    const goToNextSlide = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
    // max-w-lg mx-aut
    return (
      <div className="relative mx-auto  overflow-hidden mt-8" style={{'width':'70rem'}}>
        {/* Image Display */}
        <div
          className="w-full h-screen  bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>
  
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        >
          &#10094;
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        >
          &#10095;
        </button>
  
        {/* Dots for current image indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            ></div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageSlider;