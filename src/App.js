import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";

class App extends React.Component {
  state = {
    nameBackground: true,
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 0 && window.scrollY < 1050) {
      this.setState({
        nameBackground: true,
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
          <div className="name">Claudia Cantarini</div>
        ) : (
          <div className="main-container">
            <div className=""></div>
            <div className=""></div>
          </div>
        )}

        <MainNav />
      </>
    );
  }
}

export default App;
