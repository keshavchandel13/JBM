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
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 lora-unique'>
            {/* Property image 1 */}
            <div className='relative overflow-hidden rounded-lg shadow-lg'>
                <img src="/p1.jpg" alt="property-image-1" className='w-full h-full object-cover' />
                <div className='absolute left-4 text-white bottom-1 font-semibold text-xl '>Luxury Rooms</div>
            </div>
            {/* Property image 2 */}
            <div className='relative overflow-hidden rounded-lg shadow-lg'>
                <img src="/property.jpg" alt="property-image-2" className='w-full object-cover' />
                <div className='absolute left-4 text-white bottom-1 font-semibold text-xl '>Panaroma View</div>
            </div>
            {/* Property image 3 */}
            <div className='relative overflow-hidden rounded-lg shadow-lg'>
                <img src="/p2.jpg" alt="property-image-3" className='w-full object-cover' />
                <div className='absolute left-4 text-white bottom-1 font-semibold text-xl '>Banquet Hall</div>
            </div>
            {/* Property image 4 */}
            <div className='relative overflow-hidden rounded-lg shadow-lg'>
                <img src="/p3.jpg" alt="property-image-4" className='w-full object-cover' />
                <div className='absolute left-4 text-white bottom-1 font-semibold text-xl '>Hotels</div>
            </div>
            {/* Property image 5 */}
            <div className='relative overflow-hidden rounded-lg shadow-lg'>
                <img src="/p4.jpg" alt="property-image-5" className='w-full object-cover' />
                <div className='absolute left-4 text-white bottom-1 font-semibold text-xl '>Restaurant</div>
            </div>
            {/* Property image 6 */}
            <div className='relative overflow-hidden rounded-lg shadow-lg'>
                <img src="/p5.jpg" alt="property-image-6" className='w-full object-cover'  />
                <div className='absolute left-4 text-white bottom-1 font-semibold text-xl '>Marriage Palace</div>
            </div>

        </div>  
      
    </div>
  )
}

export default Property
