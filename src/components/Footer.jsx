import React from "react";
import logo from "./assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="wrapper">
          <div className="footer contain">
            <div className="footer__left-box">
              <div className="footer__left">
                <img src={logo} alt="logo" className="footer-img" />
                <ul className="footer-list">
                  <li className="footer-items">HOME</li>
                  <li className="footer-items">ABOUT US</li>
                  <li className="footer-items">CREATE YOUR PLAN</li>
                </ul>
              </div>
            </div>
            <div className="footer__right">
              <svg
                className="footer__icons facebook"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2Z"
                />
              </svg>
              <svg
                className="footer__icons twiter"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M22 5.8a8.49 8.49 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.21 8.21 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a3.93 3.93 0 0 1-1.1.17a4.9 4.9 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12Z"
                />
              </svg>
              <svg
                className="footer__icons instagram"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentcolor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path
                    strokeDasharray="66"
                    strokeDashoffset="66"
                    d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="66;132"
                    />
                  </path>
                  <path
                    strokeDasharray="26"
                    strokeDashoffset="26"
                    d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.7s"
                      dur="0.4s"
                      values="26;0"
                    />
                  </path>
                </g>
                <circle
                  cx="17"
                  cy="7"
                  r="1.5"
                  fill="currentcolor"
                  fillOpacity="0"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="1.1s"
                    dur="0.4s"
                    values="0;1"
                  />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
