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
        <div className={style.box1}>
          <div className={style.button}>
            <a
              target="_blank"
              href="https://drive.usercontent.google.com/download?id=1D-F3TGL14OnZlkyWLGAl2NvNibKK3M-q&export=download&authuser=0&confirm=t&uuid=9594359b-fefd-4396-a258-faf6ae88bfbc&at=APZUnTU_9mkvNqF3a29XTNJGQLIt:1717367858459"
            >
              <span>Descargar CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
