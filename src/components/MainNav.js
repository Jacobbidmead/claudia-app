import React from "react";
import "../styles/MainNav.css";

class MainNav extends React.Component {
  render() {
    return (
      <>
        <nav className="nav">
          <div className="nav-link">About</div>
          <div className="nav-link">Comissions</div>
          <div className="nav-link">Projects</div>
          <div className="nav-link">Publications</div>
        </nav>
      </>
    );
  }
}

export default MainNav;
