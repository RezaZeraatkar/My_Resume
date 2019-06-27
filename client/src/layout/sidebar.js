import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="logo" to="/">
        <span>ResumeSaz</span>
      </Link>
      <Link to="/">Profile</Link>
      <Link to="/myresume">My-Resume</Link>
      <Link to="/resumemaker">Resume-Maker</Link>
      <Link to="contact">Contact</Link>
    </Menu>
  );
};
