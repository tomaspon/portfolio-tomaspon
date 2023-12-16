import React from "react";
import style from "./About.module.css";
import Contact from "../contact/Contact";
const About = () => {
  return (
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
                fontSize: "38px",
                fontFamily: "serif",
                fontWeight: "600",
              }}
            >
              ,
            </b>
          </h3>
        </div>
        <h4>FULL STACK DEVELOPER. </h4>
        <Contact />
      </div>
      <div className={style.imgBanner}>
        <img src="src\assets\bannerme.png" alt="" />
      </div>
    </div>
  );
};

export default About;
