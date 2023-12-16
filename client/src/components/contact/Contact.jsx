import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className={style.contactContainer}>
        <div className={style.contactContent}>
          <ul>
            <li className={style.icon}>
              <a href="https://github.com/tomaspon">GitHub</a>
            </li>
            <li className={style.icon}>
              <a href="https://www.linkedin.com/in/tomaspon/">LinkedIn</a>
            </li>
            <li className={style.icon}>
              <a href="https://www.youtube.com/channel/UCR3PTsSDPNktqJg2KxyUfeA">
                Youtube
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
