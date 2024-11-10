import { useState, useEffect } from "react";
import TopBar from "./component/TopBar";
import "./App.css";
import Navbar from "./component/Navbar";
import ImageSlider from "./component/ImageSlider";
import MidBody from "./component/MidBody";
import Services from "./component/Services";
import ContactForm from "./component/ContactForm";
import Links from "./component/Links";
import QuickLinks from "./component/QuickLinks";
import Rights from "./component/Rights";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactHead from "./component/ContactHead";
import Map from "./component/Map";
import AboutHead from "./component/AboutHead";
import AboutUs from "./component/AboutUs";
import MissionAndVision from "./component/MissionAndVision";
import PortfolioHead from "./component/PortfolioHead";
import Portfolio from "./component/Portfolio";
import Wedding from "./component/Wedding";
import PreWedding from "./component/PreWedding";
import Packages from "./component/Packages";
import Property from "./component/Property";
function App() {
  const images = [
    "./public/i11.jpg",
    "./public/i10.jpeg",
    "./public/i7.jpeg",
    "./public/i8.jpeg",
    "./public/i9.jpeg",
  ];
  // Use useEffect to call the backend API when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Navbar />
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                {" "}
                <ImageSlider images={images} interval={5000} /> <MidBody />{" "}
                <Services />
                <Packages/> <ContactForm /> <Links />
                <QuickLinks /> <Rights />
              </>
            }
          />
          {/* Contact page */}
          <Route
            path="/contact"
            element={
              <>
                {""}
                <ContactHead /> <Services /> <Map /> <ContactForm /> <Links />
                <QuickLinks /> <Rights />
              </>
            }
          />
          {/* About Us */}
          <Route
            path="/about-us"
            element={
              <>
                {""}
                <AboutHead /> <AboutUs/> <MissionAndVision/> <Services />
                <Map/> 
                <ContactForm /> <Links />
                <QuickLinks /> <Rights />
              </>
            }
          />
          {/* Portfolio page */}
          <Route
            path="/portfolio"
            element={
              <>
                {""}
                <PortfolioHead/>
                <Portfolio/>
                <Wedding/>
                <PreWedding/>
                <Property/>
                <Packages/>

                <ContactForm /> <Links />
                <QuickLinks /> <Rights />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
