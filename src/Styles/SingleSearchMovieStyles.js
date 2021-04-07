import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "20px",
      transition: "0.3s linear",
      "&:hover": {
        padding: "10px",
      },
    },

    singleMovieCard: {
      position: "relative",
      backgroundColor: "#ef6c00",
    },

    singleMovieCardMedia: {
      height: "485px",
    },

    singleMovieFavouriteHeart: {
      position: "absolute",
      bottom: "8.5%",
      left: 0,
    },

    // ////////////////////////////////////////////////////////////ProblemAlertComp
    problemCard: {
      minHeight: "60vh",
      backgroundColor: "#2196f3",
    },
    sadFace: {
      position: "absolute",
      right: "50%",
      top: "60%",
      transform: "translateX(50%)",
      fontSize: "200px",
      animation: `$rollingSadFace 5000ms ${theme.transitions.easing.easeInOut}`,
      zIndex: 100,
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
