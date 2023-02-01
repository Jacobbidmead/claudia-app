import React from "react";
import "../styles/Work.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const textAnimate = {
  offscreen: { y: 100 },
  onscreen: {
    y: 0,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

const Work = () => {
  return (
    <>
      <div className="work-container">
        {/* empty div */}
        <div></div>
        {/* empty div */}
        <div className="link-container">
          <Link to="/Projects" className="work-nav end">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              src="images/cat.jpeg"
              alt=""
              className="image"
            />
            <span className="hidden-word projects-word">Projects</span>
          </Link>
        </div>
        <div className="link-container">
          <Link to="/Commissions" className="work-nav middle">
            <motion.img
              src="images/cat.jpeg"
              alt=""
              className="image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
            />
            <span className="hidden-word commissions-word">Commissions</span>
          </Link>
        </div>
        <div className="link-container">
          <Link to="/Publications" className="work-nav end">
            <motion.img
              src="images/cat.jpeg"
              alt=""
              className="image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
            />
            <span className="hidden-word publications-word">Publications</span>
          </Link>
        </div>
        <Link className="home-button" to="/" style={{ color: "white" }}>
          Home
        </Link>
      </div>
    </>
  );
};

export default Work;
