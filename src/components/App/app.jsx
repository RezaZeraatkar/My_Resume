import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import { BrowserRouter } from 'react-router-dom';

// Components
import Layout from '../../layout/layout';
import Routes from '../../routes/routes';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes />
    </Layout>
  </BrowserRouter>
);

export default App;
