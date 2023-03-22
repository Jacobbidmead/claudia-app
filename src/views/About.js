import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className="about-main-container">
        <div className=" links about-nav">
          <span className="top-links">
            <Link to="/">CLAUDIA CANTARINI</Link>
          </span>
          <span className="top-links">
            <Link to="/Work" className="top-links">
              Work
            </Link>
          </span>
        </div>

        <div className="main-about">
          <div className="about-image-container">
            <img src="images/Claudia.jpeg" alt="" className="about-image" />{" "}
          </div>
          <div className="about-intro">
            {" "}
            Claudia is a photographer; born in Italy and raised in London,
            working with analog and digital photography.{" "}
            <p>
              Claudia’s work is constructed, often based around women and
              femininity, focusing on portraiture and the body Her other
              interest lie in fashion, editorial and lifestyle photography
            </p>{" "}
            <span className="about-works">
              <b>Selected publications:</b> Vogue Italia, British Journal of
              Photography (Portrait of Humanity, Edition 360) , Photo London
              2021, Cartier (Saatchi Gallery) Having recently adopted mixed
              media art in her practice she has also achieved a First Class BA
              in Photography with the installation “All That Glitters is not
              Gold”
            </span>
            <div className="about-books">
              <b>Exhibitions and books</b> Photovogue, Vogue Italia, Portrait of
              Humanity Vol.3 The British Journal of Photography, Edition 365 -
              NFT sale on Opensea by British Journal of Photography, Exhibated
              at Photo London 2021 - Somerset House.
            </div>
          </div>
        </div>

        <div className="links about-bot-links">
          <span className="bottom-links ">
            <Link to="/about">About</Link>
          </span>
          <span style={{ color: "black" }} className="bottom-links ">
            Instagram
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
