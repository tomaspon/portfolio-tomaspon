import React from "react";
import style from "./Home.module.css";
import NavBar from "../navBar/NavBar";
import Landing from "../landing/Landing";
import About from "../about/About";
import Services from "../services/Services";
import Works from "../works/Works";

const Home = () => {
  return (
    <div id="home">
      <div className={style.navBarContainer}>
        <NavBar />
      </div>
      <div className={style.container}>
        <div className={style.landingContainer} id="landing">
          <Landing />
        </div>
        <div className={style.aboutContainer} id="about">
          <About />
        </div>
        <div className={style.servicesContainer} id="services">
          <Services />
        </div>
        <div className={style.worksContainer} id="works">
          <Works />
        </div>
      </div>
    </div>
  );
};

export default Home;
