import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "./assets/Ellipse 10.png";

import "../styles/Nav.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="left-side">
        <img src={LogoImage} alt="logo" id="img" />
        <div className="hidden-link">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Categories">Categories</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-side">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Categories">Categories</Link>
          </li>
        </ul>
      </div>
      <div className="bars-icon">
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default NavBar;
