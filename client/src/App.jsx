
import Home from "./components/home/Home";
import Services from "./components/services/Services"
import Works from "./components/works/Works";
import About from "./components/about/About";
import Contact from "./components/contact/Contact"
import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'

const App = () => {
  return (
  <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </div>
  )
}

export default App
