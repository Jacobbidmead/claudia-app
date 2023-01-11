import React from "react";
import "../styles/MainNav.css";

class MainNav extends React.Component {
  render() {
    return (
      <>
        <nav className="nav">
          <div>About</div>
          <div>Comissions</div>
          <div>Projects</div>
          <div>Publications</div>
        </nav>
      </>
    );
  }
}

export default MainNav;
