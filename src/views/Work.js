import React from "react";
import "../styles/Work.css";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <>
      <div className="work-container">
        <Link to="/">
          <span className="return-home">Claudia Cantarini</span>
        </Link>
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
            className="image-links"
            style={{ height: "65%", marginTop: "60px" }}
          />
        </Link>
        <Link to="/Girls" className="image-links-container">
          <img src="images/Girls/Girl1.jpg" alt="" className="image-links" />
        </Link>
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
