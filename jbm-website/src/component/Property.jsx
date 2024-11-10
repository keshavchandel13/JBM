import React from 'react'

const Property = () => {
  return (
    <div id="property-section" className='bg-gray-100 py-12'>
        {/* Header */}
        <div className='text-center mb-10'>
            <h1 className='text-4xl font-bold mb-4 text-gray-800'>Property Shoots</h1>
            <p className='text-gray-600 text-xl lora-unique'>Capturing The Beauty and Essence Of The Properties </p>
        </div>

        {/* Property images grid*/}
        <div className='grid grid-cols-3 grid-rows-2 px-4 gap-8 lora-unique'>
            {/* Property image 1 */}
            <div className='relative overflow-hidden rounded-lg shadow-lg'>
                <img src="./public/p1.jpg" alt="property-image-1" className='w-full object-cover' />
                <div className='absolute left-4 text-white bottom-1 font-semibold text-xl '>Luxury Rooms</div>
            </div>
            {/* Property image 2 */}
            <div className='relative overflow-hidden rounded-lg shadow-lg'>
                <img src="./public/property.jpg" alt="property-image-1" className='w-full object-cover' />
                <div className='absolute left-4 text-white bottom-1 font-semibold text-xl '>Panaroma View</div>
            </div>
            {/* Property image 3 */}
            <div className='relative overflow-hidden rounded-lg shadow-lg'>
                <img src="./public/p2.jpg" alt="property-image-1" className='w-full object-cover' />
                <div className='absolute left-4 text-white bottom-1 font-semibold text-xl '>Banquet Hall</div>
            </div>
            {/* Property image 4 */}
            <div className='relative overflow-hidden rounded-lg shadow-lg'>
                <img src="./public/p3.jpg" alt="property-image-1" className='w-full object-cover' />
                <div className='absolute left-4 text-white bottom-1 font-semibold text-xl '>Hotels</div>
            </div>
            {/* Property image 5 */}
            <div className='relative overflow-hidden rounded-lg shadow-lg'>
                <img src="./public/p4.jpg" alt="property-image-1" className='w-full object-cover' />
                <div className='absolute left-4 text-white bottom-1 font-semibold text-xl '>Restaurant</div>
            </div>
            {/* Property image 6 */}
            <div className='relative overflow-hidden rounded-lg shadow-lg'>
                <img src="./public/p5.jpg" alt="property-image-1" className='w-full object-cover' />
                <div className='absolute left-4 text-white bottom-1 font-semibold text-xl '>Marriage Palace</div>
            </div>

        </div>
      
    </div>
  )
}

export default Property
