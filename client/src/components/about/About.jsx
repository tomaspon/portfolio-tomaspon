import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div>
    <div className={style.container}>
      <div className={style.aboutContent}>
        <h2>ABOUT ME</h2>
        <hr style={{margin:'0 auto', width:'44px', position:'relative', right:'386px', marginTop:'-6px'}} />
        <p>I'm a creative and innovative thinker with a strong work ethic.
          <br />
          I'm always looking for new challenges and opportunities to learn and grow. I'm also a team player and I'm always willing to help others.
          <br />I'm passionate about using technology to make a positive impact on the world. 
          <br />I believe that technology can be used to solve problems, improve people's lives, and make the world a better place. <b>😊💙</b>
      </p>
      </div>
    </div>
    </div>
  );
};

export default About;
