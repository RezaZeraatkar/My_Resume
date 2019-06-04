import React from "react";
import PropTypes from "prop-types";

// Components
import Sidebar from "../components/Sidebar/sidebar";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  render() {
    //const { children } = this.props;
    const { open } = this.state;
    return (
      // Page Container
      <div className="margin-top" style={{ maxWidth: "1400px" }}>
        {open ? (
          // The Grid
          <div className="row-padding">
            <aside className="third">
              {/* Left Column */}
              <Sidebar />
            </aside>
            <article className="twothird">{this.props.children}</article>
          </div>
        ) : (
          <div>Closed</div>
        )}
        <footer className="container teal center margin-top link-white">
          <p>Find me on social media.</p>
          <i className="fa fa-instagram hover-opacity xs-margin-all" />
          <i className="fa fa-twitter hover-opacity xs-margin-all" />
          <i className="fa fa-linkedin hover-opacity xs-margin-all" />
          <i className="fa fa-telegram hover-opacity xs-margin-all" />
          <p>
            Powered by{" "}
            <a href="#myWebsiteAddress" target="_blank">
              Reza Zeraatkar
            </a>{" "}
            and thanks to{" "}
            <a
              href="https://www.w3schools.com/w3css/default.asp"
              rel="noreferrer noopener"
              target="_blank"
            >
              w3.css
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
