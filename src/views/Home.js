import React from "react";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-image-container">
          <img src="images/home.jpeg" alt="" className="home-image" />
        </div>
        <Nav />
      </div>
    </>
  );
};

export default Home;
