import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import AboutCIM from "./components/AboutCIM";
import Clients from "./components/Clients";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <ParallaxProvider>
      <div className="App font-sans text-gray-900">
        <Navbar />
        <Hero />
        <Services/>
        <About />
        <AboutCIM />
        <Clients />
        <Reviews />
        <Contact />
      </div>
    </ParallaxProvider>
  );
}

export default App;
