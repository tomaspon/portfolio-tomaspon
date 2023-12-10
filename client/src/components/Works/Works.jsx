import React from 'react';
import style from "./Works.module.css"

const Works = () => {
  return (
    <div className={style.container}>
    <section id="Works">
      <h2>Works</h2>
      <div className={style.workContainers}>
      <ul>
        <li>
            <div className={style.workContent}>
              Work 1
            </div>
        </li>
        <li>
            <div className={style.workContent}>
              Work 2
            </div>
        </li>
        <li>
            <div className={style.workContent}>
              Work 3
            </div>
        </li>
      </ul>
    </div>
    </section>
    </div>
  );
};

export default Works;