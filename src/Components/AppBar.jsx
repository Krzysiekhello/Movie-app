import React from "react";

import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import useStyles from "../Styles/MovieSearchStyles";

const AppBarComp = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar position="fixed" elevation={12} className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className="title">
            We really like Movies
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open ? true : false}>
        <div>
          <IconButton onClick={() => toggleDrawer()}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <Link to="/">Main</Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <Link to="saved">Saved</Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <Link to="contact">Contact</Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default AppBarComp;
