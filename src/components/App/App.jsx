import React from "react";
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import { BrowserRouter } from "react-router-dom";

// Components
import Layout from "../../layout/layout";
import Routes from "../../routes/routes";

class App extends React.Component {
  constructor() {
    super();
    // just a dumy state to test our enzyme config for testing reactDom is working
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
