import React from "react";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.presentContainer}>
        <div>
          <h2>
            Hola
            <b
              className={style.bolds}
              style={{ fontWeight: "600", fontSize: "42px" }}
            >
              !
            </b>
          </h2>
          <h3>
            <b style={{ fontWeight: "200", color: " rgb(233, 233, 233)" }}>
              Soy
            </b>{" "}
            <b className={style.bolds}>Tomas Pon</b>
            <b
              style={{
                fontSize: "40px",
                fontFamily: "serif",
                fontWeight: "600",
                color: "rgb(233, 233, 233)",
              }}
            >
              ,
            </b>
          </h3>
        </div>
        <h4>Desarrollador Full-Stack.</h4>
      </div>
    </div>
  );
};
export default Landing;
