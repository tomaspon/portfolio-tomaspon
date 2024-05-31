import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // Mostrar el botón cuando el usuario se desplaza hacia abajo más de 200px
    if (currentScrollPos > 200 && currentScrollPos > prevScrollPos) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }

    setPrevScrollPos(currentScrollPos);

    // Fijar el nav cuando el usuario se desplaza hacia arriba
    if (currentScrollPos > prevScrollPos) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      <div className={`${style.container} ${isScrolled ? style.fixed : ""}`}>
        <ul>
          <li>
            <a href="#home">INICIO</a>
          </li>
          <li>
            <a href="#about">SOBRE MI</a>
          </li>
          <li>
            <a href="#services">TECNOLOGIAS</a>
          </li>
          <li>
            <a href="#works">TRABAJOS</a>
          </li>
          <li>
            <a href="#contact">CONTACTO</a>
          </li>
        </ul>
      </div>
      {showScrollToTop && (
        <button className={style.scrollToTop} onClick={scrollToTop}>
          ⬆
        </button>
      )}
    </div>
  );
};

export default NavBar;
