import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Styles
import "./myimage.scss";

// image
import Myimage from "./avatar_hat.jpg";

const useStyles = makeStyles(theme => ({
  imgContainer: {
    position: "relative",
    width: "100%",
    margin: "20px auto 0 auto",
    overflow: "hidden",
    textAlign: "center"
  },
  imgRound: {
    display: "block",
    maxWidth: "50%",
    height: "auto",
    borderRadius: "50%",
    boxShadow:
      "1px 1px 1px 0 rgba(85, 83, 83, 0.2), 0 1px 1px 0 rgba(85, 83, 83, 0.2)",
    filter: "grayscale(100%)",
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      height: "300px",
      width: "300px"
    }
  },
  imgCaption: {
    position: "absolute",
    left: "50%",
    top: "80%",
    transform: "translate(-50%, -50%)"
  },
  imgCaptionh5: {
    fontSize: "14px",
    letterSpacing: "1px",
    color: "#b8b4af",
    textShadow: "-1px -1px 1px rgb(58, 54, 54), 1px 1px 1px rgb(71, 67, 67)"
  }
}));

const MyImage = () => {
  const classes = useStyles();

  return (
    <div className={classes.imgContainer}>
      <img src={Myimage} className={classes.imgRound} alt="myimage" />
      <div className={classes.imgCaption}>
        <h5 className={classes.imgCaptionh5}>Reza Zeraatkar</h5>
      </div>
    </div>
  );
};

export default MyImage;
