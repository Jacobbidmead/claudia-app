import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";

class App extends React.Component {
  render() {
    return (
      <>
        <div>Hello world</div>
        <MainNav />
      </>
    );
  }
}

export default App;
