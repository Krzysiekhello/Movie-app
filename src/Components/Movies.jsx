import React, { useEffect, useState, useContext } from "react";

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

import FavoriteIcon from "@material-ui/icons/Favorite";

import useStyles from "../Styles/Movies";

const MovieSearchingComp = ({ content, heartHasBeenClicked }) => {
  const classes = useStyles();
  const [go, setGo] = useState(false);
  const { title, poster_path, vote_average } = content;
  const { getMovie } = useContext(MovieContext);
  useEffect(() => {
    setGo(true);
    return () => setGo(false);
  }, []);
  return (
    <div className={classes.singleMovieDiv}>
      <Slide direction="up" in={go} timeout={1000}>
        <Card elevation={12} className={classes.singleMovieCard}>
          <CardActionArea>
            <CardMedia
              image={`https://image.tmdb.org/t/p/w500/${content.poster_path}`}
              title="Movie poster"
              className={classes.singleMovieCardMedia}
            />
            <CardContent>
              <Typography align="center" variant="h5" component="h2">
                {title}
              </Typography>
              <Typography align="center" variant="h5" component="h4">
                Rate: {vote_average}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className={classes.singleMovieFavouriteButtonDiv}>
              {heartHasBeenClicked && (
                <div style={{ backgroundColor: "blue" }}></div>
              )}
              <IconButton
                aria-label="add to favorites "
                onClick={(e) => getMovie(e, title, poster_path, vote_average)}
              >
                <FavoriteIcon />
              </IconButton>
            </div>
          </CardActions>
        </Card>
      </Slide>
    </div>
  );
};

export default MovieSearchingComp;
