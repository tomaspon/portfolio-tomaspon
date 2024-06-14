import React from "react";

const Works = () => {
  return (
    <div className="mx-auto">
      <div className="text-center flex items-center justify-center space-x-4 relative bottom-12">
        <h2
          className="text-6xl font-semibold relative"
          style={{ left: "-453px" }}
        >
          PROYECTOS
        </h2>
        <svg
          id="SvgjsSvg1001"
          width="80"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.com/svgjs"
        >
          <defs id="SvgjsDefs1002"></defs>
          <g id="SvgjsG1008">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="80"
              height="80"
            >
              <path
                d="M46.5 55.5c-1-.9-1.5-2.2-1.5-3.5 0-1.1.4-2.1 1-3h8c1.5 2 1.3 4.7-.5 6.5-1.9 2-5.1 2-7 0zm9.9 2.8C54.6 60.1 52.3 61 50 61c-2.3 0-4.6-.9-6.4-2.6-1.7-1.7-2.6-4-2.6-6.4 0-1 .2-2 .5-3H9v32c0 3.3 2.7 6 6 6h70c3.3 0 6-2.7 6-6V49H58.5c1.1 3.2.4 6.8-2.1 9.3zM85 25H15c-3.3 0-6 2.7-6 6v14h82V31c0-3.3-2.7-6-6-6zM64 13H36v8h28v-8z"
                fill="#2962ff"
                className="color000 svgShape"
              ></path>
            </svg>
          </g>
        </svg>
      </div>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div
            className="flex flex-col"
            style={{
              position: "relative",
              top: "-80px",
              width: "88%",
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6" style={{ width: "29%" }}>
              <div className="rounded-lg h-80 overflow-hidden flex items-center justify-center">
                <img
                  src="src/assets/idmlogo.png"
                  alt=""
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-medium title-font text-white mt-5">
                    Idiomas Master
                  </h3>
                  <p
                    className="text-base leading-relaxed mt-2 text-center" // Aquí agregamos text-center
                  >
                    Una plataforma de comercio electrónico que ofrece cursos en
                    línea de diferentes idiomas.
                  </p>
                  <div className="mt-auto">
                    <button>
                      <a className="text-indigo-400 items-center">Visitar</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6" style={{ width: "29%" }}>
              <div className="rounded-lg h-80 overflow-hidden flex items-center justify-center">
                <img
                  src="https://media.licdn.com/dms/image/sync/D4D27AQHA1bP6vpmWMg/articleshare-shrink_480/0/1711727082235?e=1718060400&v=beta&t=kCDPu2F86qSbhVxsl5e-jmHawMapva4hnEvaW-8cxuw"
                  alt=""
                  className="object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-medium title-font text-white mt-5">
                    Weather App
                  </h3>
                  <p
                    className="text-base leading-relaxed mt-2 text-center" // Aquí agregamos text-center
                  >
                    Una plataforma desarrollada para proporcionar información
                    meteorológica precisa y detallada en tiempo real.
                  </p>
                  <div className="mt-auto">
                    <button>
                      <a className="text-indigo-400 items-center">Visitar</a>
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6" style={{ width: "29%" }}>
              <div className="rounded-lg h-80 overflow-hidden flex items-center justify-center">
                <img
                  src="https://www.speedrun.com/static/game/kdkz702d/cover.png?v=236b05e"
                  alt=""
                  className="object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-medium title-font text-white mt-5">
                    Rick & Morty
                  </h3>
                  <p
                    className="text-base leading-relaxed mt-2 text-center" // Aquí agregamos text-center
                  >
                    Este proyecto es una Single Page Application (SPA)
                    construida con React que muestra información sobre "Rick y
                    Morty". Utiliza la API de Rick and Morty para obtener datos
                    sobre personajes, episodios y ubicaciones, ofreciendo una
                    interfaz intuitiva y diseño responsivo.
                  </p>
                  <div className="mt-auto">
                    <button>
                      <a className="text-indigo-400 items-center">Visitar</a>
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
