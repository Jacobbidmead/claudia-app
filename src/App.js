import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import { motion } from "framer-motion";

class App extends React.Component {
  state = {
    nameBackground: true,
  };

  listenScrollEvent = (e) => {
    let backgroundBreakpoints = [0, 100, 400];

    if (
      window.scrollY > backgroundBreakpoints[0] &&
      window.scrollY < backgroundBreakpoints[1]
    ) {
      this.setState({
        nameBackground: true,
      });
    }

    if (window.scrollY > backgroundBreakpoints[2]) {
      this.setState({
        nameBackground: false,
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <>
        {this.state.nameBackground ? (
          <motion.div className="name">
            <span className="name-header">Claudia Cantarini</span>
          </motion.div>
        ) : (
          <>
            <motion.div className="main-container">
              <div className="home-image-container">
                <img className="home-image" src="images/test.jpeg" alt="" />
              </div>
            </motion.div>
            <MainNav />
          </>
        )}
      </>
    );
  }
}

export default App;
