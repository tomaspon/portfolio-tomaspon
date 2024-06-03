import React from "react";
import style from "./Works.module.css";

const Works = () => {
  return (
    <div className={style.container}>
      <div className={style.containerContent}>
        <div className={style.projectsTitle}>
          <h2>PROYECTOS</h2>
          <svg
            id="SvgjsSvg1001"
            width="80"
            height="80"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
          >
            <defs id="SvgjsDefs1002"></defs>
            <g id="SvgjsG1008">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="80"
                height="80"
              >
                <path
                  d="M46.5 55.5c-1-.9-1.5-2.2-1.5-3.5 0-1.1.4-2.1 1-3h8c1.5 2 1.3 4.7-.5 6.5-1.9 2-5.1 2-7 0zm9.9 2.8C54.6 60.1 52.3 61 50 61c-2.3 0-4.6-.9-6.4-2.6-1.7-1.7-2.6-4-2.6-6.4 0-1 .2-2 .5-3H9v32c0 3.3 2.7 6 6 6h70c3.3 0 6-2.7 6-6V49H58.5c1.1 3.2.4 6.8-2.1 9.3zM85 25H15c-3.3 0-6 2.7-6 6v14h82V31c0-3.3-2.7-6-6-6zM64 13H36v8h28v-8z"
                  fill="#2962ff"
                  class="color000 svgShape"
                ></path>
              </svg>
            </g>
          </svg>
        </div>
        <div className={style.projectsGrid}>
          <ul className={style.projectList}>
            <li>
              <div className={style.card}>
                <img src="" alt="" />

                <h2>Idiomas Master</h2>
              </div>
            </li>
          </ul>
          <ul className={style.projectList}>
            <li>
              <div className={style.card}>
                <img src="" alt="" />

                <h2>Weather App</h2>
              </div>
            </li>
          </ul>
          <ul className={style.projectList}>
            <li>
              <div className={style.card}>
                <img src="" alt="" />

                <h2>RunnersParadise</h2>
              </div>
            </li>
          </ul>
          <ul className={style.projectList}>
            <li>
              <div className={style.card}>
                <img src="" alt="" />
                <h2>Título del Proyecto</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Works;
