import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Link to="/Work" className="home-text">
          <b>CLAUDIA CANTARINI</b>
        </Link>
      </div>
    </>
  );
};

export default Home;
