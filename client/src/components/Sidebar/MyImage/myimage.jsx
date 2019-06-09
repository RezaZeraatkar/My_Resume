import React from "react";

// Styles
import "./myimage.scss";

// image
import Myimage from "./avatar_hat.jpg";

const MyImage = () => (
  <div className="img-container">
    <img src={Myimage} className="img-round" alt="myimage" />
    <div className="img-caption text-white">
      <h5>Reza Zeraatkar</h5>
    </div>
  </div>
);

export default MyImage;
