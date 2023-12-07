import React from "react";
import style from "./NavBar.module.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.container}>
        <ul>
            <li>
                <Link>
                Home
                </Link>
            </li>
            <li>
                <Link>
                About
                </Link>
            </li>
            <li>
                <Link>
                Services
                </Link>
            </li>
            <li>
                <Link>
                Works
                </Link>
            </li>
            <li>
                <Link>
                Contact
                </Link>
            </li>
        </ul>
    </div>

)}

export default NavBar;
