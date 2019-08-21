/* eslint-disable react/jsx-indent */
import React from "react";
import { withRouter } from "react-router-dom";
import Layout from "./layout/layout";

function app(props) {
  return <Layout breakpoint={990} routerProps={props} />;
}

export default withRouter(app);
