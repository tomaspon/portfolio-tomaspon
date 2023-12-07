
import Home from "./components/home/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'

const App = () => {
  return (
  <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
