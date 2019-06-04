import React from "react";
import PropTypes from "prop-types";

// Components
import Header from "../components/Header/header";
import Sidebar from "../components/Sidebar/sidebar";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    const { children } = this.props;
    const { loading } = this.state;
    return (
      // Page Container
      <div className="container" style={{ maxWidth: "1400px" }}>
        {!loading ? (
          <div>Loading</div>
        ) : (
          // The Grid
          <div>
            <div className="row">
              <Header />
            </div>
            <div className="row-padding margin-top-70">
              <aside className="third">
                {/* Left Column */}
                <Sidebar />
              </aside>
              <article className="twothird">{children}</article>
            </div>
            <div className="row">
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
          </div>
        )}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
