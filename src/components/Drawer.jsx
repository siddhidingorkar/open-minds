import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Grid,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "white",
  },
  logo: {
    color: "yellow", // Customize the logo color
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    fontFamily: 'cursive',
  },
  loginButton: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      backgroundColor: "lightblue", // Set the background color on hover
    },
  },
  
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/About" className={classes.link}>
                About
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contactUs" className={classes.link}>
                ContactUs
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/Events" className={classes.link}>
                Events
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/Donation" className={classes.link}>
                Donation
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>

      {/* Hamburger Menu Icon and Logo for Mobile View */}
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
            <MenuIcon />
          </IconButton>
        </Grid>
        <Typography variant="h4" className={classes.logo}>
          Open Minds
        </Typography>
        <Grid item xs>
          <div style={{ textAlign: "right" }}>
            <Link to="/login" className={classes.loginButton}>
              Login
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default DrawerComponent;
