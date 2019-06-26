import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Container from '@material-ui/core/Container';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// Components
import Header from "../components/Header/header";
import Sidebar from "../components/Sidebar/sidebar";
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
    <div className={classes.root}>
      <CssBaseline />
      <Grid spacing={2} container>
        {!albumes ? (
          <div>
            <CircularProgress className={classes.progress} />
          </div>
        ) : (
          // The Grid
          <>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper>
                <Sidebar />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper>
                <article>{children}</article>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
