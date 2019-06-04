import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./links.scss";

const Links = () => (
  <div className="links-container">
    <i className="fa fa-link large margin-right text-teal link-padding" />
    <Link to="/">Profile</Link>
    <br />
    <i className="fa fa-link large margin-right text-teal link-padding" />
    <Link to="/myresume">My-Resume</Link>
    <br />
    <i className="fa fa-link large margin-right text-teal link-padding" />
    <Link to="/resumemaker">Resume-Maker</Link>
    <br />
    <i className="fa fa-link large margin-right text-teal link-padding" />
    <Link to="contact">Contact</Link>
  </div>
);

export default Links;
