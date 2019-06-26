import React from "react";

function footer() {
  return (
    <footer>
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
  );
}

export default footer;
