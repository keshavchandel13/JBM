import React from 'react'

const AboutUs = () => {
  return (
    <>
    {/* <div className='w-full h-72 bg-contain bg-no-repeat' style={{'backgroundImage':'url("./public/banner.jpg")'}}>

    </div> */}
    <div className='flex justify-evenly mt-4 items-center'>
    <div className="relative group w-60 h-80 ">
    {/* Image Section */}
    <img
      src="./public/kartik.jpg" 
      alt="Leader"
      className="w-full h-full object-cover rounded-lg transition-all duration-300 "
    />
    
    {/* Hover Effect - Name at Bottom */}
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4 ">
      <p className="text-white text-xl font-semibold">KARTIK</p> 
    </div>
    

  </div>
    <div className="italic texl-xl">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Autem voluptates ea aut facere eveniet maiores minus non laboriosam,<br /> rem blanditiis laudantium, deleniti excepturi porro nostrum quod ducimus <br /> impedit recusandae quis.</p>
    </div>
    </div>
    </>
  )
}

export default AboutUs
