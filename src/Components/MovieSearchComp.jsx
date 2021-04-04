import React, { useEffect, useState, useContext } from "react";

import Movies from "./Movies";
import ProblemComp from "./ProblemComp";

import { MovieContext } from "../Context/MoviesContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";

import useStyles from "../Styles/MovieSearch";

import AppBarComp from "../Components/AppBar";
const MovieSearchComp = () => {
  const classes = useStyles();
  const {
    reqForUserLookingMovie,
    topMovies,
    movieFetchedData,
    isMovieArrEmpty,
  } = useContext(MovieContext);
  const [
    titleOfMovieYouAreLookingFor,
    setTitleOfMovieYouAreLookingFor,
  ] = useState("");
  const [userName, setUserName] = useState("");

  const fieldValueHandler = (e) => {
    e.preventDefault();
    setTitleOfMovieYouAreLookingFor(e.target.value);
  };

  useEffect(() => {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const user = rememberMe ? localStorage.getItem("name") : "";

    setUserName(user);

    setTimeout(() => {
      setUserName("");
    }, 4000);
  }, []);

  const topRatedMoviesList = topMovies.results.map((movie, index) => (
    <Movies key={index} content={movie} />
  ));
  useEffect(() => {
    return () => {
      setTitleOfMovieYouAreLookingFor("");
      setUserName("");
    };
  }, []);

  return (
    <>
      <div
        className={classes.root}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <CssBaseline />
        <AppBarComp />
        <div className={classes.listOfMovies}>
          <form>
            <Card elevation={12} className={classes.card}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                wrap="nowrap"
              >
                <Grid item>
                  <TextField
                    id="movie"
                    label="Movie title"
                    variant="filled"
                    value={titleOfMovieYouAreLookingFor}
                    onChange={(e) => fieldValueHandler(e)}
                    className="text"
                  />
                </Grid>
                <Grid item>
                  <Button
                    className={classes.searchingButton}
                    variant="contained"
                    onClick={(e) =>
                      reqForUserLookingMovie(titleOfMovieYouAreLookingFor)
                    }
                    startIcon={<FontAwesomeIcon icon={faVideo} />}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </form>
          {!movieFetchedData ? (
            <div> {topRatedMoviesList}</div>
          ) : !isMovieArrEmpty ? (
            <div>
              {movieFetchedData.results.map((movie, index) => (
                <Movies key={index} content={movie} />
              ))}
            </div>
          ) : (
            <ProblemComp />
          )}
        </div>
        <Snackbar
          transitionDuration={500}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          message={`Hello ${userName}, it's nice to see you`}
          open={userName ? true : false}
        ></Snackbar>
      </div>
    </>
  );
};

export default MovieSearchComp;
