import React from 'react';
import './notFound.css';

function NotFoundComponent() {
  return (
    <div className="bg-purple">
      <div className="stars">
        <div className="central-body">
          <img
            alt="404"
            className="image-404"
            src="http://salehriaz.com/404Page/img/404.svg"
            width="300px"
          />
          <a href="/" className="btn-go-home" target="_blank">
            GO BACK HOME
          </a>
        </div>
        <div className="objects">
          <img
            alt="rocket"
            className="object_rocket"
            src="http://salehriaz.com/404Page/img/rocket.svg"
            width="40px"
          />
          <div className="earth-moon">
            <img
              alt="earth"
              className="object_earth"
              src="http://salehriaz.com/404Page/img/earth.svg"
              width="100px"
            />
            <img
              alt="moon"
              className="object_moon"
              src="http://salehriaz.com/404Page/img/moon.svg"
              width="80px"
            />
          </div>
          <div className="box_astronaut">
            <img
              alt="astronaut"
              className="object_astronaut"
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              width="140px"
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
      </div>
    </div>
  );
}

export default NotFoundComponent;
