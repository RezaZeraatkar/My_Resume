import React from "react";

// Styles
import "./myimage.scss";

// image
import Myimage from "./avatar_hat.jpg";

const MyImage = () => (
  <div className="container">
    <img src={Myimage} className="img-round" alt="myimage" />
    <div className="display-bottomleft container text-white">
      <h2>Reza Zeraatkar</h2>
    </div>
  </div>
);

export default MyImage;
