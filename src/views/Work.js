import React from "react";
import "../styles/Work.css";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <>
      <div className="work-container">
        <span>Claudia Cantarini</span>
        <Link to="/Hidden" className="image-links-container">
          <img
            src="images/Hidden/Hidden4.jpeg"
            alt=""
            className="image-links"
          />
        </Link>
        <div className="image-links-container">
          <img src="images/fran.jpeg" alt="" className="image-links" />
        </div>
        <div className="image-links-container">
          <img src="images/pearl.jpeg" alt="" className="image-links" />
        </div>
        <div className="image-links-container">
          <img src="images/sophie.jpeg" alt="" className="image-links" />
        </div>

        <div className="image-links-container">
          <img src="images/body.jpeg" alt="" className="image-links" />
        </div>
        <div className="image-links-container">
          <img src="images/fran.jpeg" alt="" className="image-links" />
        </div>
        <div className="image-links-container">
          <img src="images/pearl.jpeg" alt="" className="image-links" />
        </div>
        <div className="image-links-container">
          <img src="images/sophie.jpeg" alt="" className="image-links" />
        </div>
        <div className="image-links-container">
          <img src="images/body.jpeg" alt="" className="image-links" />
        </div>
        <div className="image-links-container">
          <img src="images/fran.jpeg" alt="" className="image-links" />
        </div>
        <div className="image-links-container">
          <img src="images/pearl.jpeg" alt="" className="image-links" />
        </div>
      </div>
    </>
  );
};

export default Work;
