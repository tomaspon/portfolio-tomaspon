import React from "react";
import style from "./NavBar.module.css"

const NavBar = () => {

  return (
    <div className={style.container}>
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
