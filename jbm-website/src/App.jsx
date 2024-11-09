import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

function App() {
  const images = [
    "./public/i5.jpeg",
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
          <Route
            path="/"
            element={
              <>
                {" "}
                <ImageSlider images={images} interval={5000} /> <MidBody />{" "}
                <Services /> <ContactForm /> <Links />
                <QuickLinks /> <Rights />
              </>
            }
          />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
