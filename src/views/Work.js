import React from "react";
import "../styles/Work.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Work = () => {
  return (
    <>
      <div className="work-container">
        <Link to="/Hidden" className="image-links-container">
          <img
            src="images/Work/hiddenwork.jpg"
            alt=""
            className="image-links"
          />
        </Link>

        <Link to="/Girls" className="image-links-container">
          <img src="images/Work/girlswork.jpg" alt="" className="image-links" />
        </Link>
        {/* <Link to="/Vulgar" className="image-links-container">
          <img src="images/sophie.jpeg" alt="" className="image-links" />
        </Link> */}

        <div className="image-links-container">
          <img
            src="images/Work/francescawork.jpg"
            alt=""
            className="image-links"
          />
        </div>
        <div className="image-links-container">
          <img
            src="images/Work/modelswork.jpg"
            alt=""
            className="image-links"
          />
        </div>
        <div className="image-links-container">
          <img
            src="images/Work/cartierwork.jpg"
            alt=""
            className="image-links"
          />
        </div>
        <div className="image-links-container">
          <img src="images/Work/songwork.jpg" alt="" className="image-links" />
        </div>
        {/* <Link to="/ATG" className="image-links-container">
          <img
            src="images/Glitters/Glitters3.jpeg"
            alt=""
            className="image-links glitters"
          />
        </Link>
        <Link to="/Vogue" className="image-links-container">
          <img
            src="images/Vogue/vogue4.jpg"
            alt=""
            className="image-links vogue"
          />
        </Link> */}
      </div>
      <Nav />
    </>
  );
};

export default Work;
