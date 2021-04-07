import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";

import { Card, Typography, CardContent, Slide } from "@material-ui/core";

import useStyles from "../Styles/SingleSearchMovieStyles";

const ProblemComp = () => {
  const classes = useStyles();
  return (
    <div className={classes.singleMovieDiv}>
      <Slide direction="right" in={true} timeout={1000}>
        <Card elevation={0} className={classes.problemCard}>
          <CardContent>
            <Typography align="center" variant="h1" component="h1">
              Sorry,
            </Typography>
            <Typography align="center" variant="h4" component="h4">
              we couldn`t find this movie
            </Typography>
            <FontAwesomeIcon icon={faSadCry} className={classes.sadFace} />
          </CardContent>
        </Card>
      </Slide>
    </div>
  );
};

export default ProblemComp;
