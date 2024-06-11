import React, { useEffect, useState } from "react";
import style from "./Landing.module.css";

const Landing = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const words = ["Desarrollador Full-Stack."];
  const typingSpeed = 150; // velocidad de escritura en milisegundos
  const eraseSpeed = 40; // velocidad de borrado en milisegundos
  const delayBeforeErasing = 5000; // retraso antes de borrar en milisegundos

  useEffect(() => {
    let timer;
    let isTyping = true;
    let text = "";

    const typeText = () => {
      const currentWord = words[textIndex];
      if (isTyping) {
        text = currentWord.substring(0, text.length + 1);
        setDisplayText(text);
        if (text === currentWord) {
          isTyping = false;
          timer = setTimeout(eraseText, delayBeforeErasing);
        } else {
          timer = setTimeout(typeText, typingSpeed);
        }
      } else {
        text = currentWord.substring(0, text.length - 1);
        setDisplayText(text);
        if (text === "") {
          isTyping = true;
          setTextIndex((prevIndex) => (prevIndex + 1) % words.length);
          timer = setTimeout(typeText, typingSpeed);
        } else {
          timer = setTimeout(eraseText, eraseSpeed);
        }
      }
    };

    const eraseText = () => {
      const currentWord = words[textIndex];
      text = currentWord.substring(0, text.length - 1);
      setDisplayText(text);
      if (text === "") {
        isTyping = true;
        setTextIndex((prevIndex) => (prevIndex + 1) % words.length);
        timer = setTimeout(typeText, typingSpeed);
      } else {
        timer = setTimeout(eraseText, eraseSpeed);
      }
    };

    typeText();

    return () => clearTimeout(timer);
  }, [textIndex]);

  return (
    <div className={style.container}>
      <div className={style.presentContainer}>
        <div>
          <h2>
            Hola
            <b
              className={style.bolds}
              style={{ fontWeight: "400", fontSize: "38px" }}
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
        <h4>{displayText}</h4>
      </div>

      <div className={style.button}>
        <a
          target="_blank"
          href="https://drive.usercontent.google.com/download?id=1D-F3TGL14OnZlkyWLGAl2NvNibKK3M-q&export=download&authuser=0&confirm=t&uuid=9594359b-fefd-4396-a258-faf6ae88bfbc&at=APZUnTU_9mkvNqF3a29XTNJGQLIt:1717367858459"
        >
          <span>Descargar CV</span>
        </a>
      </div>
    </div>
  );
};

export default Landing;
