/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

import RenderMobile from './mobileScreen';
import RenderDesktop from './desktopScreen';

function Layout(props) {
  const { breakpoint } = props;
  // window width
  const [width, setWidth] = useState(window.innerWidth);

  const [isloaded, setloaded] = useState(true);

  // initial Home page render
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    // add resize event
    window.addEventListener('resize', handleResize);
    // remove resize event
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get('http://localhost:8080/api/loaded');
      setloaded(response.data);
    };
    fetchItems();
  }, []);

  return (
    <>
      {isloaded ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            margin: 0,
          }}
        >
          <Spinner
            animation="border"
            variant="info"
            style={{
              height: '100px',
              width: '100px',
              fontSize: '32px',
            }}
          />
        </div>
      ) : (
        <div>
          {width > breakpoint ? (
            <RenderDesktop routerProps={props} />
          ) : (
            <RenderMobile />
          )}
        </div>
      )}
    </>
  );
}

Layout.propTypes = {
  breakpoint: PropTypes.number.isRequired,
};

export default Layout;
