import React from 'react';

const AboutUs = () => {
  return (
    <>
      {/* Banner Section */}
      {/* Uncomment the banner section below if you wish to include a header image */}
      {/* <div className='w-full h-72 bg-contain bg-no-repeat' style={{'backgroundImage':'url("./public/banner.jpg")'}}></div> */}

      <div className='flex flex-col md:flex-row justify-evenly mt-8 items-center gap-8 px-4 md:px-0'>
        {/* Image Section */}
        <div className="relative group w-60 h-80">
          <img
            src="/kartik.jpg"
            alt="Leader"
            className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300"
          />
          {/* Hover Effect - Name at Bottom */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4">
            <p className="text-white text-xl font-semibold">KARTIK</p>
          </div>
        </div>

        {/* Text Section */}
        <div className="italic text-lg md:text-xl text-center md:text-left leading-relaxed">
          <p>
            Welcome to <span className="font-bold">JBM Photos & Studio</span>, where memories are captured and stories unfold. With over <br /> <span className="font-bold">25 years of experience</span> in the art of photography, we take pride in our rich legacy.
          </p>
          <p className="mt-4">
            Photography runs deep in our family, evolving from a passion to a thriving business that has been <br /> trusted by many over the years. In the early 2000s, we became renowned as the best photographers <br /> in Khajjiar, earning a reputation for excellence and creativity.
          </p>
          <p className="mt-4">
            Led by talented professionals like Kartik, JBM Photography continues to blend traditional expertise <br />with modern techniques to create breathtaking visuals that capture the essence of every moment.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
