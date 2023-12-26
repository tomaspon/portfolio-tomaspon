import React from "react";
import style from "./Home.module.css";
import NavBar from "../navBar/NavBar";
import About from "../about/About";
import Services from "../services/Services"
import Works from "../works/Works"

const Home = () => {
  return (
    <div id='home'>
      <div className={style.navBarContainer}>
      <NavBar />
      </div>
      <div className={style.container}>
        <div className={style.presentContainer}>
          <div>
            <h2>
              Hi there
              <b
                className={style.bolds}
                style={{ fontWeight: "600", fontSize: "42px" }}
              >
                !
              </b>
            </h2>
            <h3>
              <b style={{ fontWeight: "200", color: "  rgb(220, 220, 220)" }}>
                I'm
              </b>{" "}
              <b className={style.bolds}>Tomas Pon</b>
              <b
                style={{
                  fontSize: "40px",
                  fontFamily: "serif",
                  fontWeight: "600",
                }}
              >
                ,
              </b>
            </h3>
          </div>
          <h4>FULL STACK DEVELOPER. </h4>
        </div>
        <div className={style.imgBanner}>
          <img src="src\assets\bannerme.png" alt="" />
        </div>
          <div className={style.contactContent}>
            <ul>
              <li className={style.icon}>
                  <a href="https://www.linkedin.com/in/tomaspon/">
                    <img src="src\assets\linkedin.png" alt="LinkedIn" />
                  </a>
              </li>
              <li className={style.icon}>
                  <a href="https://github.com/tomaspon">
                    <img src="src\assets\github.png" alt="GitHub" />
                  </a>
              </li>
              <li className={style.iconyt}>
                <a href="https://www.youtube.com/channel/UCR3PTsSDPNktqJg2KxyUfeA">
                <img src="src\assets\youtube.png" alt="Youtube" width="38px"/>
                </a>
              </li>
            </ul>
                <div className={style.hrs}>
              <hr />
              <hr />
              <hr />
                </div>
              </div>
              <div className={style.aboutContainer} id="about">
                <About/>
              </div>
              <div className={style.servicesContainer} id="services">
                <Services/>
              </div>
              <div className={style.worksContainer} id="works">
                <Works/>
              </div>
          </div>
        </div>
    );
};

export default Home;
