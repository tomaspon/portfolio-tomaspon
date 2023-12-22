import React from "react";
import style from "./NavBar.module.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.container}>
        <ul>
            <li>
                <Link to="/home">
                Home
                </Link>
            </li>
            <li>
                <Link to="/about">
                About
                </Link>
            </li>
            <li>
                <Link to="/services">
                Services
                </Link>
            </li>
            <li>
                <Link to="/works">
                Works
                </Link>
            </li>
            <li>
                <Link to="/contact">
                Contact
                </Link>
            </li>
        </ul>
    </div>

)}

export default NavBar;
