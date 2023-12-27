import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css"

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
  
      if (currentScrollPos > prevScrollPos) {
        // El usuario está desplazándose hacia abajo, oculta la barra de navegación
        setIsScrolled(false);
      } else {
        // El usuario está desplazándose hacia arriba, muestra la barra de navegación
        setIsScrolled(true);
      }
  
      setPrevScrollPos(currentScrollPos);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [prevScrollPos]);
  return (
    <div className={`${style.container} ${isScrolled ? style.fixed : ""}`}>
        <ul>
            <li>
                <a href="#home" >Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#services">Services</a>
            </li>
            <li>
                <a href="#works">Works</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>

)}

export default NavBar;
