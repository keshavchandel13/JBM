import React from 'react'

const MidBody = () => {
  return (
    <div className='mt-8 p-4'>
        <div className='text-center text-4xl mb-4'>
        <h1 style={{'fontFamily':'sans-serif'}}>WE ARE BEST WEDDING PHOTOGRAPHER OF HIMACHAL</h1>
        </div>
        <div className='flex flex-row gap-12'>
            <div className='p-4'>
            Capturing timeless moments in the heart of Himachal, we bring your wedding day to life with stunning, high-quality photography. <br />From majestic mountain backdrops to the intimate details of your ceremony,  trust us to create a visual story that you'll <br /> treasure forever.

            </div>
            <div className='w-40 h-60 bg-cover' style={{'backgroundImage':"URL('./public/2.jpg')"}}>

            </div>
        </div>
      
    </div>
  )
}

export default MidBody
