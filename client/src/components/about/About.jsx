import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.aboutContent}>
          <h2>SOBRE MI</h2>
          <div className={style.text}>
            <p>
              ⠂Me caracterizo por mi diligencia y capacidad de adaptación, lo
              que me permite trabajar eficazmente tanto de forma independiente
              como en equipo.
              <br />
              ⠂Tengo habilidades para organizar y priorizar tareas según los
              objetivos del proyecto. Disfruto colaborar en entornos dinámicos
              que valoran la creatividad y la innovación.
              <br />
              ⠂Creo firmemente en la importancia del trabajo en equipo y en la
              diversidad de ideas para lograr soluciones sólidas.
              <b>😊💙</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
