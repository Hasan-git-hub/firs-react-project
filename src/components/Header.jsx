import React from "react";
import logotip from "./assets/logotip.png";

const Header = () => {
  return (
    <div>
      <header className="about-header-cont">
        <div className="about-header">
          <div className="about-header-box container">
            <img src={logotip} alt="logo" className="navbar-img" />
            <ul className="navbar-list">
              <li className="navbar-item">HOME</li>
              <li className="navbar-item">ABOUT US</li>
              <li className="navbar-item">CREATE YOUR PLAN</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
