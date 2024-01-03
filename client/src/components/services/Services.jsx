import React from "react";
import style from "./Services.module.css";

const Services = () => {
  return (
    <div>
    <div className={style.container}>
      <div className={style.containerContent}>
      <div className={style.containerTitle}>
        <h2>SERVICES</h2>
        <hr style={{ margin:'0 auto', width:'33.5px', position:'relative', right:'-78px', marginTop:'4px', top:'44px', border:'solid 1px #183577'}} />
      </div>
      <div className={style.sections}>
      <div className={style.skillsTitle}>
        <h2>Development</h2>
      </div>
      <section id="services" className={style.serviceSection}>
      <p>HTML / CSS</p>
      <div className={style.containerService}>
        <div className={style.skillshtmlcss}><h5>90%</h5></div>
      </div>

      <p>JavaScript</p>
      <div className={style.containerService}>
        <div className={style.skillsjs}><h5>85%</h5></div>
      </div>

      <p>React</p>
      <div className={style.containerService}>
        <div className={style.skillsreact}><h5>85%</h5></div>
      </div>

      <p>Node.js</p>
      <div className={style.containerService}>
        <div className={style.skillsnode}><h5>80%</h5></div>
      </div>
      <p>Express.js</p>
      <div className={style.containerService}>
        <div className={style.skillsexpress}><h5>75%</h5></div>
      </div>
      <p>PostgreSQL</p>
      <div className={style.containerService}>
        <div className={style.skillspostgre}><h5>65%</h5></div>
      </div>
      <p>Git/GitHub</p>
      <div className={style.containerService}>
        <div className={style.skillsgithub}><h5>65%</h5></div>
      </div>
      </section>
        <div className={style.otherSkills}>
        <h2>Graphic Design / Creative Tools</h2>
        </div>
      <section id="services" className={style.otherServiceSection}>
        <div>
          <p>Adobe Photoshop</p>
          <div className={style.otherContainerService}>
          <div className={style.skillsPs}>
            <h5>80%</h5>
          </div>
        </div>
      <p>Adobe Premiere Pro</p>
      <div className={style.otherContainerService}>
        <div className={style.skillsPremier}><h5>75%</h5></div>
      </div>

      <p>Adobe After Effects</p>
      <div className={style.otherContainerService}>
        <div className={style.skillsAfterEff}><h5>55%</h5></div>
      </div>

      <p>Adobe Lightroom</p>
      <div className={style.otherContainerService}>
        <div className={style.skillsLightroom}><h5>45%</h5></div>
      </div>
      <p>Adobe Acrobat Pro</p>
      <div className={style.otherContainerService}>
        <div className={style.skillsAcrobat}><h5>70%</h5></div>
      </div>
      <p>Adobe Audition</p>
      <div className={style.otherContainerService}>
        <div className={style.skillsAudition}><h5>50%</h5></div>
      </div>
      <p>Adobe Spark</p>
      <div className={style.otherContainerService}>
        <div className={style.skillsSpark}><h5>80%</h5></div>
      </div>
          </div>
      </section>
    </div>
    </div>
    </div>
        </div>
  );
};

export default Services;
