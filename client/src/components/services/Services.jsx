import React from "react";
import style from "./Services.module.css";
import NavBar from "../navBar/NavBar";

const Services = () => {
  return (
    <div>
    <div className={style.container}>
      <section id="services">
        <div className={style.skillTitles}>
          <h2>SERVICES</h2>
        </div>
        <div className={style.skillsContainer}>
          <div className={style.skill}>
            <img src="" alt="" />
          </div>

          <div className={style.skill}>
            <img src="" alt="" />
          </div>

          <div className={style.skill}>
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Services;
