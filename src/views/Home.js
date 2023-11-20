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
          <div>
            <a
              href="www.instgram.com"
              alt=""
              style={{ color: "white", padding: "10px" }}
            >
              insta
            </a>
          </div>
          <div>get in toouch/ </div>
        </div>
      </div>
    </>
  );
};

export default Home;
