import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Link to="/Work" className="home-text">
          <div className="title">
            <div>CLAUDIA CANTARINI</div>
          </div>
        </Link>
        <div className="home-links">
          <a
            href="https://www.instagram.com/claudia.cantarini/"
            alt="my instagram"
            target="_blank"
            rel="noreferrer"
            style={{ color: "red", padding: "10px" }}
          >
            insta
          </a>

          <div style={{ padding: "10px", color: "red" }}>get in touch </div>
        </div>
      </div>
    </>
  );
};

export default Home;
