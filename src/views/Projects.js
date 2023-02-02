import React from "react";
import ProjectSwiper from "../components/ProjectSwiper";
import "../styles/Projects.css";

class Projects extends React.Component {
  state = {};

  render() {
    return (
      <>
        <div className="projects-container">
          <div className="content-nav">
            <div className="content-links">link1</div>
            <div className="content-links">link2</div>
            <div className="content-links">link3</div>
            <div className="content-links">link3</div>
          </div>
          <div className="content-image">
            <div className="large-photo-container">
              <ProjectSwiper />
            </div>
          </div>
          {/* empty div */}
          <div></div>
          {/* empty div */}
          <div className="info-link">More Info</div>
        </div>
      </>
    );
  }
}

export default Projects;
