import React from "react";
import "../styles/Work.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Work = () => {
  return (
    <>
      <div className="work-container">
        <Link to="/Hidden" className="image-links-container">
          <div>
            <img
              src="images/Work/hiddenwork.jpg"
              alt=""
              className="image-links"
            />
            <span className="project-name">Hidden</span>
          </div>
        </Link>

        <Link to="/Girls" className="image-links-container">
          <div>
            {" "}
            <img
              src="images/Work/girlswork.jpg"
              alt=""
              className="image-links"
            />
            <span className="project-name">Girls</span>
          </div>
        </Link>
        {/* <Link to="/Vulgar" className="image-links-container">
          <img src="images/sophie.jpeg" alt="" className="image-links" />
        </Link> */}

        <div className="image-links-container">
          <div>
            {" "}
            <img
              src="images/Work/francescawork.jpg"
              alt=""
              className="image-links"
            />
            <span className="project-name">Francesca </span>
          </div>
        </div>
        <Link to="/Models" className="image-links-container">
          <div>
            {" "}
            <img
              src="images/Work/modelswork.jpg"
              alt=""
              className="image-links"
            />
            <span className="project-name">Modals</span>
          </div>
        </Link>
        <div className="image-links-container">
          <div>
            {" "}
            <img
              src="images/Work/cartierwork.jpg"
              alt=""
              className="image-links"
            />
            <span className="project-name">Cartier</span>
          </div>
        </div>
        <div className="image-links-container">
          <div>
            {" "}
            <img
              src="images/Work/songwork.jpg"
              alt=""
              className="image-links"
            />
            <span className="project-name">Song</span>
          </div>
        </div>
        <Link to="/ATG" className="image-links-container">
          <div>
            {" "}
            <img
              src="images/Work/glitterswork.jpg"
              alt=""
              className="image-links"
            />
            <span className="project-name">All That Glitters</span>
          </div>
        </Link>
      </div>
      <Nav currentPage={"work"} />
    </>
  );
};

export default Work;
