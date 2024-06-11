import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // Mostrar el botón cuando el usuario se desplaza hacia abajo más de 200px
    if (currentScrollPos > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }

    // Ocultar el nav cuando el usuario se desplaza hacia abajo y mostrarlo cuando se desplaza hacia arriba
    if (currentScrollPos > prevScrollPos) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      <div
        className={`${style.container} ${style.fixed} ${
          isHidden ? style.hidden : ""
        }`}
      >
        <ul>
          <li className={style.homeIcon}>
            <svg
              id="SvgjsSvg1001"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnsSvgjs="http://svgjs.com/svgjs"
            >
              <defs id="SvgjsDefs1002"></defs>
              <g id="SvgjsG1008">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                >
                  <path
                    d="M18.672 11H17v6c0 .445-.194 1-1 1h-4v-6H8v6H4c-.806 0-1-.555-1-1v-6H1.328c-.598 0-.47-.324-.06-.748L9.292 2.22c.195-.202.451-.302.708-.312.257.01.513.109.708.312l8.023 8.031c.411.425.539.749-.059.749z"
                    fill="#ffffff"
                    className="color000 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
            <a href="#home">INICIO</a>
          </li>
          <li className={style.homeIcon}>
            <svg
              id="SvgjsSvg1001"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.com/svgjs"
            >
              <defs id="SvgjsDefs1002"></defs>
              <g id="SvgjsG1008">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="20"
                  height="20"
                >
                  <path
                    fill="#ffffff"
                    d="M46.8 20.1h-3.3c-.3 0-.6-.2-.7-.5-.5-2.1-1.3-4-2.4-5.8-.2-.3-.1-.6.1-.9l2.3-2.3c.3-.3.3-.7 0-1l-4.5-4.5c-.3-.3-.7-.3-1 0L35 7.5c-.2.2-.6.3-.9.1-1.8-1.1-3.7-1.9-5.8-2.4-.3-.1-.5-.3-.5-.7V1.2c0-.4-.3-.7-.7-.7h-6.3c-.4 0-.7.3-.7.7v3.3c0 .3-.2.6-.5.7-2.1.5-4 1.3-5.8 2.4-.3.2-.6.1-.9-.1l-2.3-2.3c-.3-.3-.7-.3-1 0L5.1 9.6c-.3.3-.3.7 0 1L7.5 13c.2.2.3.6.1.9-1.1 1.8-1.9 3.7-2.4 5.8-.1.3-.3.5-.7.5H1.2c-.4 0-.7.3-.7.7v6.3c0 .4.3.7.7.7h3.3c.3 0 .6.2.7.5.5 2.1 1.3 4 2.4 5.8.2.3.1.6-.1.9l-2.3 2.3c-.3.3-.3.7 0 1l4.5 4.5c.3.3.7.3 1 0l2.3-2.3c.2-.2.6-.3.9-.1 1.8 1.1 3.7 1.9 5.8 2.4.3.1.5.3.5.7v3.3c0 .4.3.7.7.7h6.3c.4 0 .7-.3.7-.7v-3.3c0-.3.2-.6.5-.7 2.1-.5 4-1.3 5.8-2.4.3-.2.6-.1.9.1l2.3 2.3c.3.3.7.3 1 0l4.5-4.5c.3-.3.3-.7 0-1L40.5 35c-.2-.2-.3-.6-.1-.9 1.1-1.8 1.9-3.7 2.4-5.8.1-.3.3-.5.7-.5h3.3c.4 0 .7-.3.7-.7v-6.3c0-.4-.3-.7-.7-.7zM24 35.8c-6.5 0-11.8-5.3-11.8-11.8S17.5 12.3 24 12.3 35.7 17.5 35.7 24 30.5 35.8 24 35.8z"
                    class="color696969 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
            <a href="#services">SERVICIOS</a>
          </li>
          <li className={style.homeIcon}>
            <svg
              id="SvgjsSvg1011"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnsSvgjs="http://svgjs.com/svgjs"
            >
              <defs id="SvgjsDefs1012"></defs>
              <g id="SvgjsG1013">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 468 468"
                  width="20"
                  height="20"
                >
                  <path
                    d="M355.785 78.646C332.77 33.39 287.883 0 236.278 0c-75.062 0-135.911 60.841-135.911 135.892l-36.755 28.68s22.389 12.085 49.389 12.261v15.26c0 58.344 34.729 111.1 88.232 134.4 10.293 4.483 21.424 6.724 32.477 6.724 10.997 0 22.033-2.219 32.278-6.658l.504-.141C320.15 303.171 355 250.372 355 191.906v-15.442c2 .119 3.598.16 5.548.095l-.07-.023c12.174-31.847 10.762-67.5-4.693-97.89zM333 191.906c0 50.006-29.438 95.163-75.314 115.038l-.222.141a59.408 59.408 0 0 1-47.415-.046C164.298 287.114 135 241.995 135 192.093v-17.63c23-5.556 47.719-21.991 66.144-60.82l35.239 64.647s42.635-18.788 53.465-64.647c0 0 12.152 41.386 43.152 57.042v21.221zM303.138 355.082l-.07.001v.025l.07.037-68.963 50.272-69.404-48.571v-.032L32.186 425.573 32 468h403.653l.347-40.599z"
                    fill="#ffffff"
                    className="color000 svgShape"
                  ></path>
                  <ellipse
                    cx="185.673"
                    cy="195.704"
                    rx="16.986"
                    ry="26.038"
                    fill="#ffffff"
                    className="color000 svgShape"
                  ></ellipse>
                  <ellipse
                    cx="281.643"
                    cy="195.704"
                    rx="16.986"
                    ry="26.038"
                    fill="#ffffff"
                    className="color000 svgShape"
                  ></ellipse>
                </svg>
              </g>
            </svg>
            <a href="#about">SOBRE MI</a>
          </li>
          <li className={style.homeIcon}>
            <svg
              id="SvgjsSvg1018"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnsSvgjs="http://svgjs.com/svgjs"
            >
              <defs id="SvgjsDefs1019"></defs>
              <g id="SvgjsG1020">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="20"
                  height="20"
                >
                  <path
                    d="M46.5 55.5c-1-.9-1.5-2.2-1.5-3.5 0-1.1.4-2.1 1-3h8c1.5 2 1.3 4.7-.5 6.5-1.9 2-5.1 2-7 0zm9.9 2.8C54.6 60.1 52.3 61 50 61c-2.3 0-4.6-.9-6.4-2.6-1.7-1.7-2.6-4-2.6-6.4 0-1 .2-2 .5-3H9v32c0 3.3 2.7 6 6 6h70c3.3 0 6-2.7 6-6V49H58.5c1.1 3.2.4 6.8-2.1 9.3zM85 25H15c-3.3 0-6 2.7-6 6v14h82V31c0-3.3-2.7-6-6-6zM64 13H36v8h28v-8z"
                    fill="#ffffff"
                    className="color000 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
            <a href="#works">PROYECTOS</a>
          </li>
          <li className={style.homeIcon}>
            <svg
              id="SvgjsSvg1036"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.com/svgjs"
            >
              <defs id="SvgjsDefs1037"></defs>
              <g id="SvgjsG1038">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 32 32"
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                >
                  <path
                    d="M26,2H6C4.895,2,4,2.895,4,4v2H3C2.448,6,2,6.448,2,7s0.448,1,1,1c1.795,0-1.145,0,3,0c0.552,0,1,0.448,1,1	s-0.448,1-1,1H4v12H3c-0.552,0-1,0.448-1,1s0.448,1,1,1c1.795,0-1.145,0,3,0c0.552,0,1,0.448,1,1s-0.448,1-1,1H4v2
	c0,1.105,0.895,2,2,2h20c1.105,0,2-0.895,2-2V4C28,2.895,27.105,2,26,2z M16,7c2.209,0,4,1.791,4,4c0,2.209-1.791,4-4,4
	s-4-1.791-4-4C12,8.791,13.791,7,16,7z M22,24H10v-2c0-3.314,2.686-6,6-6s6,2.686,6,6V24z"
                    fill="#ffffff"
                    class="color000 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
            <a href="#contact">CONTACTO</a>
          </li>
        </ul>
      </div>

      {showScrollToTop && (
        <button className={style.scrollToTop} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default NavBar;
