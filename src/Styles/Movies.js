import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => {
  return {
    singleMovieDiv: {
      padding: "20px",
      transition: "0.3s linear",
      "&:hover": {
        padding: "10px",
      },
    },
    singleMovieDivAcitve: {
      opacity: 1,
      padding: "20px",
    },
    singleMovieCard: {
      backgroundColor: "#ef6c00",
    },

    singleMovieCardMedia: {
      height: "11rem",
    },
    singleMovieFavouriteButtonDiv: {
      // backgroundColor: "green",
      borderRadius: "50%",
    },
    singleMovieFavouriteHeart: {
      height: "100px",
    },
    // ////////////////////////////////////////////////////////////ProblemAlertComp
    sadFace: {
      position: "absolute",
      right: "50%",
      top: "60%",
      transform: "translateX(50%)",
      fontSize: "200px",
      animation: `$rollingSadFace 5000ms ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes rollingSadFace": {
      "0%": {
        opacity: 0,
        right: "-100%",
        transform: "rotate(180deg)",
      },
      "100%": {
        opacity: 1,
        right: "23.5%",
        transform: "rotate(0deg)",
      },
    },
  };
});
export default useStyles;
