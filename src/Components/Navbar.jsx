import React, { useState } from "react";
// @ts-ignore
import logo from "../images/logo.jpg";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <header>
        <nav>
          <div
            className="menu"
            onClick={() => setShowLinks(!showLinks)}
            id={showLinks ? "close" : "menu"}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className="nav-bar" id={showLinks ? "hidden" : ""}>
            <li className="logo-link">
              <NavLink to="/" className="logo">
                <img src={logo} alt="logo" />
              </NavLink>
            </li>
            <li className="home">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/integration">Integration</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
          <div className="right-btn">
            <NavLink to="/" className="early-btn">
              Get early access
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
