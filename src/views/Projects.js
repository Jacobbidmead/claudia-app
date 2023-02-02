import { render } from "@testing-library/react";
import React from "react";
import "../styles/Projects.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <div className="work-container">
        {/* empty div */}
        <Link className="home-button" to="/" style={{ color: "white" }}>
          CLAUDIA CANTARINI
        </Link>
        {/* empty div */}
        <div className="link-container">
          <Link to="/Projects" className="work-nav end">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "tween",
                stiffness: 400,
                damping: 10,
                duration: 0.1,
              }}
              src="images/sophie.jpeg"
              alt=""
              className="image"
            />
            <motion.span className="hidden-word projects-word">
              Projects
            </motion.span>
          </Link>
        </div>
        <div className="link-container">
          <Link to="/Commissions" className="work-nav middle">
            <motion.img
              src="images/pearl.jpeg"
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
              src="images/body.jpeg"
              alt=""
              className="image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
            />
            <span className="hidden-word publications-word">Publications</span>
          </Link>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Projects;
