import React, { useContext } from "react";

import useStyles from "../Styles/SingleSavedMovieStyles";
import { MovieContext } from "../Context/MoviesContext";

import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  IconButton,
  CardActionArea,
  Slide,
} from "@material-ui/core";

import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

const SingleSavedMovie = ({ content, render }) => {
  const classes = useStyles();

  const { title, posterPath } = content;
  const { deleteMovieFromSavedMovies } = useContext(MovieContext);

  const deletingMovieAndRenderingComp = (e, title) => {
    e.preventDefault();
    deleteMovieFromSavedMovies(e, title);
    render({});
  };

  return (
    <div className={classes.root}>
      <Slide direction="up" in={true} timeout={1000}>
        <Card elevation={12} className={classes.singleSavedMovieCard}>
          <CardActionArea>
            <CardMedia
              image={`https://image.tmdb.org/t/p/w500/${posterPath}`}
              title="Movie poster"
              className={classes.singleSavedMovieCardMedia}
            />
          </CardActionArea>
          <CardContent>
            <Typography align="center" variant="h5" component="h2">
              {title}
            </Typography>
            <Typography align="center" variant="h5" component="h4"></Typography>
          </CardContent>
          <CardActions>
            <div>
              <IconButton
                aria-label="delte from favourties"
                className={classes.singleSavedMovieDeleteButton}
              >
                <DeleteForeverRoundedIcon
                  fontSize="large"
                  onClick={(e) => {
                    deletingMovieAndRenderingComp(e, title);
                  }}
                />
              </IconButton>
            </div>
          </CardActions>
        </Card>
      </Slide>
    </div>
  );
};

export default SingleSavedMovie;
