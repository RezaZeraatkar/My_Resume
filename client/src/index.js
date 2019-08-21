import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// My-Components
import App from "./app";

// My-Styles
// import "./index.scss";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
