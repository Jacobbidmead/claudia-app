import React from "react";
import "../styles/Work.css";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <>
      <div className="work-container">
        {/* empty div */}
        <div></div>
        {/* empty div */}
        <div className="link-container">
          <Link to="/Projects" className="work-nav end">
            <img src="images/cat.jpeg" alt="" />
          </Link>
        </div>
        <div className="link-container">
          <Link to="/Commissions" className="work-nav middle">
            <img src="images/cat.jpeg" alt="" />
          </Link>
        </div>
        <div className="link-container">
          <Link to="/Publications" className="work-nav end">
            <img src="images/cat.jpeg" alt="" />
          </Link>
        </div>

        <div style={{ color: "white" }}>Home</div>
      </div>
    </>
  );
};

export default Work;
