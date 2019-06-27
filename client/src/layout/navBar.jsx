import React from "react";
import SideBar from "./sidebar";
import "./app.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Side from "../components/Sidebar/sidebar";
import Footer from "../components/Footer/footer";

function Header(props) {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <Grid item xs={12} md={4}>
          <Paper>
            <Side />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <article>{props.child}</article>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </div>
    </div>
  );
}

export default Header;
