import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.form}>
          <h3>CONTACTO</h3>
          <div className={style.formContent} >
          <img src="" alt="" />
          <label htmlFor="">Mensaje</label>
          <textarea name="" id=""></textarea>
          <label htmlFor="">Email</label>
          <input type="email" />
          <button>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
