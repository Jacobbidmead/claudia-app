import React from "react";
import "../styles/MainNav.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "../views/About.js";
import App from "../App.js";

const MainNav = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <div>
            <Link>About</Link>
          </div>
          <div>
            <Link>Home</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" exact component={App} />

          <Route path="/about" exact component={About} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainNav;
