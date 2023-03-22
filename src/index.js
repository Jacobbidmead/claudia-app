import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./views/About";
import Work from "./views/Work";
import ATG from "./views/Projects/ATG.js";
import Girls from "./views/Projects/Girls.js";
import Hidden from "./views/Projects/Hidden.js";
import Vulgar from "./views/Projects/Vulgar";
import Vogue from "./views/Projects/Vogue";
import "swiper/css/bundle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/Work",
    element: <Work />,
  },
  {
    path: "/ATG",
    element: <ATG />,
  },
  {
    path: "/Girls",
    element: <Girls />,
  },
  {
    path: "/Hidden",
    element: <Hidden />,
  },
  {
    path: "/Vulgar",
    element: <Vulgar />,
  },
  {
    path: "/Vogue",
    element: <Vogue />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
