import React from "react";
import "../styles/Projects.css";

class Projects extends React.Component {
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
              <img src="images/test.jpeg" alt="" className="main-photo" />
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
