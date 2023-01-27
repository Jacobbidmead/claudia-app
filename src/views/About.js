import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="home-container">
        <div className="links">
          <span className="top-links">
            <Link to="/" style={{ color: "white" }}>
              CLAUDIA CANTARINI
            </Link>
          </span>
          <span className="top-links">
            <Link to="/Work" className="top-links" style={{ color: "white" }}>
              Work
            </Link>
          </span>
        </div>
        <div className="home-image-container"></div>
        <div className="links">
          <span className="bottom-links">
            <Link to="/about" style={{ color: "white" }}>
              About
            </Link>
          </span>
          <span className="bottom-links">Instagram</span>
        </div>
      </div>
    </>
  );
};

export default About;
