import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontFamily: "inter",
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    margin: "0 15px", // Reduced spacing between links
    borderBottom: "1px solid transparent",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  loginButton: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      backgroundColor: "lightblue", // Set the background color on hover
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <>
            <Typography variant="h4" className={classes.logo}>
              Open Minds
            </Typography>
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/About" className={classes.link}>
                About
              </Link>
              <Link to="/contactUs" className={classes.link}>
                Contact
              </Link>
              <Link to="/Events" className={classes.link}>
                Events
              </Link>
              <Link to="/Donation" className={classes.link}>
                Donation
              </Link>
              <Link to="/Login" className={classes.link}>
                Login
              </Link>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
