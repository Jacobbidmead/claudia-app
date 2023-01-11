import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";

class App extends React.Component {
  state = {
    nameBackground: false,
  };

  listenScrollEvent = (e) => {
    console.log("work");
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
          <div className="name" style={{}}>
            Claudia Cantarini
          </div>
        ) : (
          <>
            <div className="main-container">
              <div className=""></div>
              <div className=""></div>
            </div>
            <MainNav />
          </>
        )}
      </>
    );
  }
}

export default App;
