import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.presentContainer}>
        <div className={style.backgroundBar}>
          <h2>
            Hi there
            <b
              className={style.bolds}
              style={{ fontWeight: "600", fontSize: "34px" }}
            >
              !
            </b>
          </h2>
          <h3>
            <b style={{ fontWeight: "200" }}>I'm</b>{" "}
            <b className={style.bolds}>Tomas Pon.</b>
          </h3>
        </div>
        <h2 className={style.fullStackTitle}>FULL STACK DEVELOPER</h2>
        <div className={style.imgBanner}></div>
        <img src="src\assets\bannerme.png" alt="" />
      </div>
    </div>
  );
};

export default About;
