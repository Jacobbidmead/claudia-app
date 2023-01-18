import React from "react";
import "./App.css";
import MainNav from "./components/MainNav";
import Nav from "./components/Nav";
import { motion } from "framer-motion";

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
          <>
            <motion.div className="name">
              <span className="name-header">
                <div id="text">
                  <div class="line">
                    <p class="word">CLAUDIA</p>
                    <p class="word">CANTARINI</p>
                  </div>

                  <div class="line">
                    <p class="word">PHOTOGRAPHER</p>
                    <p class="word">&</p>
                  </div>

                  <div class="line">
                    <p class="word"></p>
                  </div>

                  <div class="line">
                    <p class="word">CLAUDIA@HOTMAIL.COM</p>
                  </div>
                </div>
              </span>
            </motion.div>
            <div className="contacts-container">
              <div></div>

              <div className="contact">
                <a
                  href="https://www.instagram.com/camomilehaze/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Instagram
                </a>
              </div>
              <div className="contact">
                <a
                  href="https://github.com/Jacobbidmead"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  GitHub
                </a>
                <div></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <motion.div className="main-container"></motion.div>
            <Nav />
          </>
        )}
      </>
    );
  }
}

export default App;
