import React from "react";
import style from "./Works.module.css";
import NavBar from "../navBar/NavBar";

const Works = () => {
  return (
      <div>
    <div className={style.container}>
      <section id="Works">
        <h2>WORKS</h2>
        <div className={style.sectionContent}>
          <div className={style.workContainers}>
            <ul>
              <li>
                <div className={style.workContent}>Work 1</div>
              </li>
              <li>
                <div className={style.workContent}>Work 2</div>
              </li>
              <li>
                <div className={style.workContent}>Work 3</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
      </div>
  );
};

export default Works;
