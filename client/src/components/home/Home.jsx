import React from "react";
import style from "./Home.module.css";
import NavBar from "../navBar/NavBar";
import SoftSkills from "../softSkills/SoftSkills";
import Works from "../works/Works";
import About from "../about/About";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <About />
      <SoftSkills />
      <Works />
      <Footer />
    </div>
  );
};

export default Home;
