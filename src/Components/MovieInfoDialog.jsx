import React from "react";

import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import { Typography } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import useStyles from "../Styles/DialogStyles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const MovieInfoModal = ({ openModal, setOpenModal, movieInformations }) => {
  const classes = useStyles();
  const {
    title,
    description,
    relaseDate,
    rate,
    posterPath,
  } = movieInformations;
  const handleClose = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };
  const body = (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.modalReadMoremModal}>
        {title}
      </Typography>
      <Typography variant="h6" className={classes.modalReadMoremModal}>
        {description}
      </Typography>
      <Typography className={classes.modalReadMoremModal} variant="h5">
        {relaseDate}
      </Typography>
      <Typography
        className={classes.modalReadMoremModal}
        color="secondary"
        variant="h4"
        align="center"
      >
        Movie rate: {rate}
      </Typography>
    </div>
  );

  return (
    <div>
      <Dialog fullScreen open={openModal} TransitionComponent={Transition}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt="movieimage"
          className={classes.dialogImage}
        />
        <IconButton
          onClick={handleClose}
          edge="start"
          aria-label="close"
          className={classes.dialogCloseButton}
        >
          <FontAwesomeIcon icon={faTimesCircle} style={{ color: "#ef6c00" }} />
        </IconButton>
        {body}
      </Dialog>
    </div>
  );
};

export default MovieInfoModal;
