import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./views/About";
import Commissons from "./views/Commissions";
import Projects from "./views/Projects";
import Publications from "./views/Publications";
import Work from "./views/Work";

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
    path: "/Commissions",
    element: <Commissons />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Publications",
    element: <Publications />,
  },
  {
    path: "/Work",
    element: <Work />,
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
