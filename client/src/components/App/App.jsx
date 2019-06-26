import React from "react";
import axios from "axios";

// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import { BrowserRouter } from "react-router-dom";

// Components
import Layout from "../../layout/layout";
import Routes from "../../routes/routes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albums: null };
  }

  componentDidMount() {
    axios.get("/api/albums").then(res => this.setState({ albums: res.data }));
  }

  render() {
    return (
      <BrowserRouter>
        <Layout albumes={this.state.albums}>
          <Routes />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
