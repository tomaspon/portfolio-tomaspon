import React from "react";
import style from "./Home.module.css"
import NavBar from "../navBar/NavBar";
import SoftSkills from "../softSkills/SoftSkills";
import Works from "../Works/Works";
import About from "../about/About";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <About/>
      <SoftSkills/>
      <Works/>
    </div>

)}

export default Home;
