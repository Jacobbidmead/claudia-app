import React from "react";
import "./App.css";
import MainNav from "./components/MainNav";
import HomeImage from "./components/HomeImage";
import { motion } from "framer-motion";
import ImageSlider from "./components/ImageSlider";
import About from "./views/About";

class App extends React.Component {
  state = {
    nameBackground: true,
  };

  listenScrollEvent = (e) => {
    let backgroundBreakpoints = [0, 50, 400];

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
              <ImageSlider />
            </motion.div>
            <MainNav />
          </>
        )}
      </>
    );
  }
}

export default App;
