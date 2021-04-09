import React, { useEffect, useState, useContext } from "react";

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

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import useStyles from "../Styles/SingleSearchMovieStyles";

const MovieSearchingComp = ({ content }) => {
  const classes = useStyles();
  const [go, setGo] = useState(false);
  const [savedMovie, setSavedMovie] = useState(false);

  const { title, poster_path, vote_average, overview, release_date } = content;

  const { getMovie } = useContext(MovieContext);

  const { handleModal } = useContext(ModalContext);
  // console.log(itemss);
  useEffect(() => {
    setGo(true);
    return () => setGo(false);
  }, []);

  return (
    <div className={classes.root}>
      <Slide direction="up" in={go} timeout={1000}>
        <Card elevation={12} className={classes.singleMovieCard}>
          <CardActionArea>
            <CardMedia
              image={`https://image.tmdb.org/t/p/w500/${content.poster_path}`}
              title="Movie poster"
              className={classes.singleMovieCardMedia}
            />
          </CardActionArea>

          <CardContent>
            <Typography align="center" variant="h5" component="h2">
              {title}
            </Typography>
            <Typography align="center" variant="h5" component="h4">
              Rate: {vote_average}
            </Typography>
          </CardContent>
          <CardActions>
            <div
              style={{
                flexGrow: 1,
              }}
            >
              <IconButton
                aria-label="add to favorites"
                fullWidth={true}
                onClick={(e) => {
                  getMovie(
                    e,
                    title,
                    poster_path,
                    vote_average,
                    overview,
                    release_date
                  );
                  setSavedMovie(true);
                }}
                className={classes.singleMovieFavouriteHeart}
              >
                {savedMovie ? (
                  <FavoriteIcon fontSize="large" />
                ) : (
                  <FavoriteBorderIcon fontSize="large" />
                )}
              </IconButton>
              <Button
                variant="contained"
                fullWidth={true}
                onClick={(e) =>
                  handleModal(
                    e,
                    title,
                    vote_average,
                    overview,
                    release_date,
                    poster_path
                  )
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

export default MovieSearchingComp;
