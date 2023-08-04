import React from "react";
import "../styles/Work.css";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <>
      <Link to="/">
        <span className="return-home">Claudia Cantarini</span>
      </Link>
      <div className="work-container">
        <Link to="/Hidden" className="image-links-container">
          <img
            src="images/Hidden/Hidden4.jpeg"
            alt=""
            className="image-links"
          />
        </Link>
        <Link to="/ATG" className="image-links-container">
          <img
            src="images/Glitters/Glitters3.jpeg"
            alt=""
            className="image-links glitters"
          />
        </Link>
        <Link to="/Girls" className="image-links-container">
          <img src="images/Girls/Girl1.jpg" alt="" className="image-links" />
        </Link>
        <Link to="/Vulgar" className="image-links-container">
          <img src="images/sophie.jpeg" alt="" className="image-links" />
        </Link>
        <Link to="/Vogue" className="image-links-container">
          <img
            src="images/Vogue/vogue4.jpg"
            alt=""
            className="image-links vogue"
          />
        </Link>
        <div className="image-links-container">
          <img src="images/fran.jpeg" alt="" className="image-links" />
        </div>
        <div className="image-links-container">
          <img src="images/valentina.jpg" alt="" className="image-links" />
        </div>
      </div>
    </>
  );
};

export default Work;
