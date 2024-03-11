import React from "react";
import "../Style/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#home">
          <h1>PORTFOLIO.</h1>
        </a>
      </div>
      <div className="contents">
        <a href="#skills">
          <h3>Skills</h3>
        </a>
        <a href="#projects">
          <h3>Projects</h3>
        </a>
        <a href="#about">
          <h3>About</h3>
        </a>
        <a href="#contact">
          <h3>Contact</h3>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
