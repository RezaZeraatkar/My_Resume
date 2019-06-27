import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import BurgerMenu from "./sidebarLinks";
import SideBar from "../components/Sidebar/sidebar";
import Footer from "../components/Footer/footer";

// Styles
import "./app.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    padding: "80px",
    backgroundColor: "#ab47bc"
  },
  paper: {
    height: "100%",
    width: "100%"
  },
  circularProgress: {
    margin: "45vh 45vw"
  }
}));

function Layout(props) {
  const classes = useStyles();

  return !props.albumes ? (
    <CircularProgress className={classes.circularProgress} />
  ) : (
    <div id="App">
      <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap" className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper>
              <SideBar />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper>{props.children}</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Footer />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Layout;
