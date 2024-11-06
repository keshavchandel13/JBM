import React from 'react'

const Navbar = () => {
  return (
    <div className='border p-4 mt-2 bg-orange-200 text-lg ' >
        <ul className='flex flex-row justify-center gap-40 font-semibold'>
            <li className='hover:scale-125 ease-linear cursor-pointer'>Home</li>
            <li className='hover:scale-125 ease-linear cursor-pointer'>Portfolio</li>
            <li className='hover:scale-125 ease-linear cursor-pointer'>About Us!</li>
            <li className='hover:scale-125 ease-linear cursor-pointer'>Contact</li>
        </ul>
      
    </div>
  )
}

export default Navbar
