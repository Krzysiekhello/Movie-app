import React, { useContext } from "react";

import { MovieContext } from "../Context/MoviesContext";
import { ModalContext } from "../Context/DialogContext";

import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  IconButton,
  CardActionArea,
  Slide,
  Button,
} from "@material-ui/core";

import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

import useStyles from "../Styles/SingleSavedMovieStyles";

const SingleSavedMovie = ({ content, render }) => {
  const classes = useStyles();

  const { title, posterPath, movieRate, description, relaseDate } = content;

  const { deleteMovieFromSavedMovies } = useContext(MovieContext);

  const { handleModal } = useContext(ModalContext);

  const deletingMovieAndRenderingComp = (e, title) => {
    e.preventDefault();
    deleteMovieFromSavedMovies(e, title);
    render({});
  };

  return (
    <div className={classes.root}>
      <Slide direction="down" in={true} timeout={1000}>
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
          </CardContent>
          <CardActions>
            <div style={{ flexGrow: 1 }}>
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
              <Button
                variant="contained"
                fullWidth={true}
                onClick={(e) =>
                  handleModal(e, title, movieRate, description, relaseDate)
                }
              >
                Read more
              </Button>
            </div>
          </CardActions>
        </Card>
      </Slide>
    </div>
  );
};

export default SingleSavedMovie;
