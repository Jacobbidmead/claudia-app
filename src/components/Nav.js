import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="open-nav">
        <div id="text">
          <div className="home-bg-image"></div>
          <div class="line">
            <Link to="/about" className="link highlight">
              About
            </Link>
            <Link to="/projects" className="link highlight">
              Projects
            </Link>
          </div>

          <div class="line">
            <p className="link">+</p>
            <Link to="/commissions" className="link highlight">
              Commissions
            </Link>
          </div>

          <div class="line">
            <Link to="/publications" className="link highlight">
              Publications
            </Link>
            <Link to="/" className="link highlight">
              home
            </Link>
          </div>

          <div class="line"></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
