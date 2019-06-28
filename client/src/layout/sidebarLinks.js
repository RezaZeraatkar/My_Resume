import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360
  },
  logo: {
    fontSize: "24px",
    color: "#efebe9",
    textAlign: "center",
    letterSpacing: "1px",
    padding: "40px 20px"
  },
  primaryLink: {
    color: "#efebe9",
    padding: "7px",
    letterSpacing: "1px",
    fontWeight: "400"
  }
}));

export default props => {
  const classes = useStyles();

  return (
    // Pass on our props
    <Menu {...props}>
      <div className={classes.root}>
        <List component="nav">
          <ListItem button>
            <Link component={RouterLink} to="/" className={classes.logo}>
              ResumeSaz
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <i className="fa fa-user-circle" />
            <Link component={RouterLink} to="/" className={classes.primaryLink}>
              Profile
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <i className="fa fa-user-circle" />
            <Link
              component={RouterLink}
              to="/myresume"
              className={classes.primaryLink}
            >
              My-Resume
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <i className="fa fa-user-circle" />
            <Link
              component={RouterLink}
              to="/resumemaker"
              className={classes.primaryLink}
            >
              Resume-Maker
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <i className="fa fa-user-circle" />
            <Link
              component={RouterLink}
              to="/contact"
              className={classes.primaryLink}
            >
              Contact
            </Link>
          </ListItem>
          <Divider />
        </List>
      </div>
    </Menu>
  );
};
