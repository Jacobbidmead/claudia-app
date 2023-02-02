import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className="about-main-container">
        <div className="links">
          <span className="top-links">
            <Link to="/">CLAUDIA CANTARINI</Link>
          </span>
          <span className="top-links">
            <Link to="/Work" className="top-links">
              Work
            </Link>
          </span>
        </div>
        <div className="about-container">
          {/* empty div */}
          <div></div>
          {/* empty div */}
          <div className="main-about">
            <div className="about-image-container">
              <img src="images/Claudia.jpeg" alt="" className="about-image" />{" "}
              <div className="about-intro">
                {" "}
                Claudia is a photographer born in Italy and raised in London,
                working with analog and digital photography.{" "}
                <p>
                  Claudia’s work is constructed, often based around women and
                  femininity, focusing on portraiture and the body Her other
                  interest lie in fashion, editorial and lifestyle photography
                </p>{" "}
              </div>
            </div>
            <span className="about-works">
              <b>Selected publications:</b> &bull;Vogue Italia, British Journal
              of Photography (Portrait of Humanity, Edition 360) , Photo London
              2021, Cartier (Saatchi Gallery) Having recently adopted mixed
              media art in her practice she has also achieved a First Class BA
              in Photography with the installation “All That Glitters is not
              Gold”
            </span>
          </div>
          {/* empty div */}
          <div></div>
          {/* empty div */}
        </div>
        <div className="links">
          <span className="bottom-links">
            <Link to="/about">About</Link>
          </span>
          <span style={{ color: "black" }} className="bottom-links">
            Instagram
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
