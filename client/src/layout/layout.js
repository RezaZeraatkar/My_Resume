/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import RenderMobile from "./mobileScreen";
import RenderDesktop from "./desktopScreen";

function Layout(props) {
  const { breakpoint } = props;
  // window width
  const [width, setWidth] = useState(window.innerWidth);
  // initial Home page render
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    // add resize event
    window.addEventListener("resize", handleResize);
    // remove resize event
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {width > breakpoint ? (
        <RenderDesktop routerProps={props} />
      ) : (
        <RenderMobile />
      )}
    </div>
  );
}

Layout.propTypes = {
  breakpoint: PropTypes.number.isRequired
};

export default Layout;
