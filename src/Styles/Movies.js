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
  };
});
export default useStyles;
