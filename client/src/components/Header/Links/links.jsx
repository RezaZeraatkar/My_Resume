import React from "react";
import { Link } from "react-router-dom";
import toggleOffOn from "../../../utils/utils";

const Links = () => (
  <div>
    <nav>
      <ul className="top-navbar" id="toggle">
        <li>
          <Link className="logo" to="/">
            <span>ResumeSaz</span>
          </Link>
        </li>
        <li className="togglebtn">
          <Link to="/" onClick={toggleOffOn}>
            &#9776;
          </Link>
        </li>
        <li>
          <Link to="/">Profile</Link>
        </li>
        <li>
          <Link to="/myresume">My-Resume</Link>
        </li>
        <li>
          <Link to="/resumemaker">Resume-Maker</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Links;
