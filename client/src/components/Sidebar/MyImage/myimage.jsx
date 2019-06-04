import React from "react";

// Styles
import "./myimage.scss";

// image
import Myimage from "./avatar_hat.jpg";

const MyImage = () => (
  <div className="image-container img-dark-inset-gradient">
    <img src={Myimage} style={{ width: "100%" }} alt="myimage" />
    <div className="display-bottomleft container text-white">
      <h2>Reza Zeraatkar</h2>
    </div>
  </div>
);

export default MyImage;
