import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          <div className=""></div>
          <div className=""></div>
        </div>
        <MainNav />
      </>
    );
  }
}

export default App;
