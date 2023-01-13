import React from "react";
import { Link } from "react-router-dom";
import Home from "./../pages/Home";
const NavBar = () => {
  return (
    <div className="nav">
      <div className="left-side"></div>
      <div className="right-side">
        <ul>
          <li>
            <Link to="/" Home>
              Home
            </Link>
          </li>
          <li>
            <Link to="Categories">Categories</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
