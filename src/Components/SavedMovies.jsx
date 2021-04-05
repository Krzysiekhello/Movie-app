import React, { useState } from "react";

import AppBar from "./AppBar";
import SingleSavedMovie from "./SingleSavedMovie";

import Typography from "@material-ui/core/Typography";

import useStyles from "../Styles/SavedMoviesStyles";
const SavedMovies = () => {
  const classes = useStyles();
  const [, rerender] = useState({});

  const arrayWithSavedMovies = JSON.parse(localStorage.getItem("savedMovies"));

  const singleMovie = arrayWithSavedMovies.map((savedMovie, index) => (
    <SingleSavedMovie key={index} content={savedMovie} render={rerender} />
  ));

  return (
    <div className={classes.root}>
      <AppBar />
      <Typography
        variant="h3"
        component="h3"
        align="center"
        className={classes.savedMoviesTypography}
      >
        Your fav movies
      </Typography>
      <div>{singleMovie}</div>
    </div>
  );
};

export default SavedMovies;
