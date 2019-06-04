import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./links.scss";

const Links = () => (
  <div className="top-navbar resonsive back-teal card fixed">
    <Link to="/">Profile</Link>
    <Link to="/myresume">My-Resume</Link>
    <Link to="/resumemaker">Resume-Maker</Link>
    <Link to="contact">Contact</Link>
    <span class="navbar-toggle" id="js-navbar-toggle">
      <i class="fa fa-bars" />
    </span>
  </div>
);

export default Links;
