import React, { useState, useContext } from "react";

import AppBar from "./AppBar";
import SingleSavedMovie from "./SingleSavedMovie";
import MovieInfoModal from "./MovieInfoDialog";

import { ModalContext } from "../Context/DialogContext";

import Typography from "@material-ui/core/Typography";

import useStyles from "../Styles/SavedMoviesStyles";
const SavedMovies = () => {
  const classes = useStyles();
  const [, rerender] = useState({});

  const arrayWithSavedMovies = JSON.parse(localStorage.getItem("savedMovies"));

  const singleMovie = arrayWithSavedMovies.map((savedMovie, index) => (
    <SingleSavedMovie key={index} content={savedMovie} render={rerender} />
  ));
  const { movieInformation, openModal, setOpenModal } = useContext(
    ModalContext
  );
  console.log(movieInformation);

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
      <div className={classes.singleMovieDiv}>{singleMovie}</div>
      {movieInformation && (
        <MovieInfoModal
          hideBackdrop={false}
          openModal={openModal}
          setOpenModal={setOpenModal}
          movieInformations={movieInformation}
        />
      )}
    </div>
  );
};

export default SavedMovies;
