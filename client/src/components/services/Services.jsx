import React from "react";
import style from "./Services.module.css";
import NavBar from "../navBar/NavBar";

const Services = () => {
  return (
    <div>
    <div className={style.container}>
      <section id="services">
        <div className={style.skillTitles}>
          <h2>Services</h2>
          <h3>Skill-Set</h3>
        </div>
        <div className={style.skillsList}>
          <div className={style.skill}>
            <p>JavaScript</p>
          </div>

          <div className={style.skill}>
            <p>React</p>
          </div>

          <div className={style.skill}>
            <p>Node.js</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Services;
