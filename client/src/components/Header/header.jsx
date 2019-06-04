import React, { Component } from "react";
import Links from "./Links/links";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Links />;
  }
}

export default Header;
