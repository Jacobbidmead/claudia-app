import React from "react";
import "../styles/MainNav.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "../views/About.js";
import App from "../App.js";

const MainNav = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-link">
          <Link to="/about">About</Link>
        </div>
        <div className="nav-link">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
          <Link>Projects</Link>
        </div>
        <div className="nav-link">
          <Link>Commissions</Link>
        </div>
        <div className="nav-link">
          <Link>Publications</Link>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
