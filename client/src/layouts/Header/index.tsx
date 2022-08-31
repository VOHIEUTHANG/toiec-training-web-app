import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      id="header"
      className="h-[70px] flex items-center justify-between bg-primary-color"
    >
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <img src="" alt="" />
          </div>
          <div className="nav">
            <ul className="nav-list flex">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/training">Training</Link>
              </li>
            </ul>
          </div>
          <div className="user"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
