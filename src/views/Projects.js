import React from "react";
import ImageSlider from "../components/ImageSlider";
import MainNav from "../components/MainNav";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <div></div>
        <ImageSlider />
      </div>
      <MainNav />
    </>
  );
};

export default Projects;
