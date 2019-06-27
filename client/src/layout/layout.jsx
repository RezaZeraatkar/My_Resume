import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { slide as Menu } from "react-burger-menu";
import Grid from "@material-ui/core/Grid";

// import Container from '@material-ui/core/Container';
import CssBaseline from "@material-ui/core/CssBaseline";

import "./app.scss";
// Components
// import NavBar from "../components/NavBar/navBar";
import SideBar from "./sidebar";
import Footer from "../components/Footer/footer";

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  },
  paper: {
    height: "100%"
  },
  control: {
    padding: theme.spacing(2)
  },
  progress: {
    display: "block",
    margin: "50vh auto"
  }
}));

function Layout(props) {
  // const [loading, setLoading] = useState(true);

  const classes = useStyles();
  const { children, albumes } = props;

  return (
    // Page Container
    <>
      {!albumes ? (
        <div>
          <CircularProgress className={classes.progress} />
        </div>
      ) : (
        // The Grid
        <>
          <div id="App">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <div id="page-wrap" />
          </div>
        </>
      )}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
