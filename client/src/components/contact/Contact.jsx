import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.leftColumn}>
          <div className={style.hrTitle1}>
            <div className={style.formContentTitle}>
              <svg
                id="SvgjsSvg1001"
                width="39"
                height="39"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.com/svgjs"
              >
                <defs id="SvgjsDefs1002"></defs>
                <g id="SvgjsG1008">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="40"
                    height="40"
                  >
                    <path
                      fill="#2962ff"
                      d="M60,28a2,2,0,0,0-2,0L32,42.7,6,28a2,2,0,0,0-3,1.74V47a6,6,0,0,0,6,6H55a6,6,0,0,0,6-6V29.75A2,2,0,0,0,60,28Z"
                      class="color2962ff svgShape"
                    ></path>
                    <path
                      fill="#2962ff"
                      d="M55,11H9a6,6,0,0,0-6,6v3.75a2,2,0,0,0,1,1.74L31,37.74a2,2,0,0,0,2,0L60,22.49a2,2,0,0,0,1-1.74V17A6,6,0,0,0,55,11Z"
                      class="color2962ff svgShape"
                    ></path>
                  </svg>
                </g>
              </svg>{" "}
              <h3>Envíame un mensaje</h3>
              <hr />
            </div>
          </div>
          <div className={style.formInputs}>
            <input type="text" placeholder="Nombre" id="name" />
            <input type="email" placeholder="Correo" id="email" />
            <input type="text" placeholder="Asunto" />
            <textarea placeholder="Mensaje"></textarea>
            <button>
              <div className={style.svgWrapper}>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
              <span>Enviar</span>
            </button>
          </div>
        </div>
        <div className={style.rightColumn}>
          <div className={style.hrTitle2}>
            <div className={style.formContentTitle2}>
              <svg
                id="SvgjsSvg1042"
                width="34"
                height="36"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.com/svgjs"
              >
                <defs id="SvgjsDefs1043"></defs>
                <g id="SvgjsG1044">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 32 32"
                    viewBox="0 -1 32 32"
                    width="36"
                    height="36"
                  >
                    <path
                      d="M26,2H6C4.895,2,4,2.895,4,4v2H3C2.448,6,2,6.448,2,7s0.448,1,1,1c1.795,0-1.145,0,3,0c0.552,0,1,0.448,1,1	s-0.448,1-1,1H4v12H3c-0.552,0-1,0.448-1,1s0.448,1,1,1c1.795,0-1.145,0,3,0c0.552,0,1,0.448,1,1s-0.448,1-1,1H4v2
	c0,1.105,0.895,2,2,2h20c1.105,0,2-0.895,2-2V4C28,2.895,27.105,2,26,2z M16,7c2.209,0,4,1.791,4,4c0,2.209-1.791,4-4,4
	s-4-1.791-4-4C12,8.791,13.791,7,16,7z M22,24H10v-2c0-3.314,2.686-6,6-6s6,2.686,6,6V24z"
                      fill="#2962ff"
                      class="color000 svgShape"
                    ></path>
                  </svg>
                </g>
              </svg>
              <h3>Contacto</h3>
              <hr />
            </div>
          </div>
          <div className={style.formContent}>
            <p>
              ¿Necesitas colaboración? ¡Contáctame!{" "}
              <strong
                style={{
                  fontWeight: "400",
                  color: "white",
                  fontSize: "20px",
                  position: "relative",
                  left: "4px",
                }}
              >
                Juntos podemos hacerlo realidad.
              </strong>
            </p>
            <ul className={style.contactInfo}>
              <li>
                <svg
                  id="SvgjsSvg1061"
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                >
                  <defs id="SvgjsDefs1062"></defs>
                  <g id="SvgjsG1063">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="30"
                      height="30"
                    >
                      <path
                        d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"
                        fill="#2962ff"
                        class="color000 svgShape"
                      ></path>
                    </svg>
                  </g>
                </svg>
                <a
                  href="https://www.google.com/maps/place/Bahía+Blanca,+Buenos+Aires+Province,+Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Bahía Blanca (Buenos Aires, Argentina)
                </a>{" "}
              </li>
              <li>
                <svg
                  id="SvgjsSvg1001"
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                >
                  <defs id="SvgjsDefs1002"></defs>
                  <g id="SvgjsG1008">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      width="30"
                      height="30"
                    >
                      <path
                        fill="#2962ff"
                        d="M60,28a2,2,0,0,0-2,0L32,42.7,6,28a2,2,0,0,0-3,1.74V47a6,6,0,0,0,6,6H55a6,6,0,0,0,6-6V29.75A2,2,0,0,0,60,28Z"
                        class="color2962ff svgShape"
                      ></path>
                      <path
                        fill="#2962ff"
                        d="M55,11H9a6,6,0,0,0-6,6v3.75a2,2,0,0,0,1,1.74L31,37.74a2,2,0,0,0,2,0L60,22.49a2,2,0,0,0,1-1.74V17A6,6,0,0,0,55,11Z"
                        class="color2962ff svgShape"
                      ></path>
                    </svg>
                  </g>
                </svg>{" "}
                tomaspon11@gmail.com
              </li>
              <li>
                <svg
                  id="SvgjsSvg1031"
                  width="28"
                  height="28"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                >
                  <defs id="SvgjsDefs1032"></defs>
                  <g id="SvgjsG1033">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="30"
                      height="30"
                    >
                      <path
                        fill="#2962ff"
                        d="M19.56 14.81a10.22 10.22 0 0 1-3.21-.51 1.47 1.47 0 0 0-1.43.3l-2 1.53a11.18 11.18 0 0 1-5-5l1.48-2a1.46 1.46 0 0 0 .36-1.47 10.23 10.23 0 0 1-.51-3.21A1.45 1.45 0 0 0 7.75 3H4.44A1.45 1.45 0 0 0 3 4.44 16.57 16.57 0 0 0 19.56 21 1.45 1.45 0 0 0 21 19.56v-3.3a1.45 1.45 0 0 0-1.44-1.45Z"
                        class="color303c42 svgShape"
                      ></path>
                    </svg>
                  </g>
                </svg>
                +54 9 (291) 575-1347
              </li>
              <div className={style.contactContent}>
                <ul>
                  <li className={style.icon}>
                    <a
                      href="https://www.linkedin.com/in/tomaspon/"
                      target="_blank"
                    >
                      <svg
                        id="SvgjsSvg1019"
                        width="38"
                        height="38"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.com/svgjs"
                      >
                        <defs id="SvgjsDefs1020"></defs>
                        <g id="SvgjsG1021">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="2 -5 18 36"
                            width="36"
                            height="36"
                          >
                            <path
                              d="m5.706 7.798v16.202h-5.395v-16.202zm.343-5.002c.001.029.002.063.002.098 0 .749-.318 1.423-.826 1.895l-.002.001c-.545.498-1.274.803-2.075.803-.049 0-.099-.001-.148-.003h.007-.033c-.041.002-.089.003-.137.003-.784 0-1.496-.306-2.025-.804l.001.001c-.504-.488-.816-1.17-.816-1.925 0-.024 0-.048.001-.073v.004c-.001-.021-.001-.045-.001-.069 0-.762.324-1.448.841-1.929l.002-.001c.544-.495 1.271-.799 2.068-.799.046 0 .091.001.137.003h-.006c.043-.002.092-.003.143-.003.785 0 1.5.303 2.034.798l-.002-.002c.515.497.835 1.193.835 1.964v.042-.002zm19.062 11.92v9.284h-5.378v-8.665c.005-.079.007-.171.007-.263 0-.896-.249-1.733-.682-2.447l.012.021c-.427-.596-1.117-.979-1.896-.979-.06 0-.12.002-.18.007h.008c-.027-.001-.058-.002-.089-.002-.62 0-1.19.213-1.641.57l.006-.004c-.453.367-.808.836-1.032 1.375l-.008.023c-.116.355-.182.763-.182 1.187 0 .048.001.096.003.144v-.007 9.042h-5.378q.033-6.523.033-10.578t-.016-4.839l-.016-.785h5.378v2.354h-.033c.214-.345.435-.644.678-.924l-.008.009c.281-.309.583-.588.908-.838l.016-.012c.404-.311.878-.555 1.392-.704l.03-.007c.538-.161 1.157-.254 1.797-.254h.079-.004c.071-.003.154-.005.237-.005 1.681 0 3.195.714 4.256 1.856l.003.004q1.702 1.856 1.702 5.436z"
                              fill="#ffffff"
                              class="color000 svgShape"
                            ></path>
                          </svg>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/tomaspon" target="_blank">
                      <svg
                        id="SvgjsSvg1014"
                        width="38"
                        height="38"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.com/svgjs"
                      >
                        <defs id="SvgjsDefs1015"></defs>
                        <g id="SvgjsG1016">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 -3 21 27"
                            width="33"
                            height="33"
                          >
                            <path
                              d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z"
                              fill="#ffffff"
                              class="color000 svgShape"
                            ></path>
                          </svg>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.x.com/tomxspon" target="_blank">
                      <svg
                        id="SvgjsSvg1030"
                        width="38"
                        height="38"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.com/svgjs"
                      >
                        <defs id="SvgjsDefs1031"></defs>
                        <g id="SvgjsG1032">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 1668.56 1221.19"
                            viewBox="40 0 1400.56 1100.20"
                            width="34"
                            height="34"
                          >
                            <path
                              d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
                              transform="translate(52.39 -25.059)"
                              fill="#ffffff"
                              class="color000 svgShape"
                            ></path>
                          </svg>
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
