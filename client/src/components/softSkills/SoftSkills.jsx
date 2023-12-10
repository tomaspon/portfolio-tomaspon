import React from 'react';
import style from "./SoftSkills.module.css"

const SoftSkills = () => {
  return (
    <div className={style.container}>
    <section id="softSkills">
      <h2>SOFT SKILLS</h2>

  <div className={style.skillsList}>

      <div className={style.skill}>
      <p>JavaScript</p>
      </div>

      <div className={style.skill}>
      <p>React</p>
      </div>

      <div className={style.skill}>
      <p>Node.js</p>
      </div>
    </div>

    </section>
    </div>
  );
};

export default SoftSkills;