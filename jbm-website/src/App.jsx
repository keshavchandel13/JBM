import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TopBar from './component/TopBar'
import './App.css'
import Navbar from './component/Navbar'
import ImageSlider from './component/ImageSlider'
import MidBody from './component/MidBody'

function App() {
  const images=[
    './public/i5.jpeg',
    './public/i10.jpeg',
    './public/i7.jpeg',
    './public/i8.jpeg',
    './public/i9.jpeg'
  ];
  return (
    <>
    <TopBar/>
    <Navbar/>
    <ImageSlider images={images} interval={5000}/>
    <MidBody/>
      
    </>
  )
}

export default App
