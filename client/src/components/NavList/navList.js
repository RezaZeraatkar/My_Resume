import React from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import ListGroup from "../MyCustomComponents/ListGroup";
import ListGroupItem from "../MyCustomComponents/ListGroupItem";

function NavList(props) {
  const { pageRoute } = props;
  return (
    <ListGroup>
      <ListGroupItem toRoute={pageRoute === ""}>
        <Link id="home" to="/">
          Home
        </Link>
      </ListGroupItem>
      <ListGroupItem toRoute={pageRoute === "resume"}>
        <Link id="resume" to="/resume">
          Resume
        </Link>
      </ListGroupItem>
      <ListGroupItem toRoute={pageRoute === "skills"}>
        <Link id="skills" to="/skills">
          Skills
        </Link>
      </ListGroupItem>
      <ListGroupItem toRoute={pageRoute === "portfolio"}>
        <Link id="portfolio" to="/portfolio">
          Portfolio
        </Link>
      </ListGroupItem>
      <ListGroupItem toRoute={pageRoute === "contact"}>
        <Link id="contact" to="/contact">
          Contact
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}

export default NavList;
