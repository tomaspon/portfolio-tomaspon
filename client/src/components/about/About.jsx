import React from "react";
import style from "./About.module.css";
import NavBar from "../navBar/NavBar";

const About = () => {
  return (
    <div>
    <NavBar/>
    <div className={style.aboutContainer}>
      <div className={style.aboutContent}>
        <h2>About me</h2>
        <p>I'm a creative and innovative thinker with a strong work ethic. I'm always looking for new challenges and opportunities to learn and grow. I'm also a team player and I'm always willing to help others. I'm passionate about using technology to make a positive impact on the world. I believe that technology can be used to solve problems, improve people's lives, and make the world a better place. :)
</p>
      </div>
    </div>
    </div>
  );
};

export default About;
