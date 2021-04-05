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
    singleSavedMovieCard: {
      position: "relative",
      backgroundColor: "#ef6c00",
    },

    singleSavedMovieCardMedia: {
      height: "11rem",
    },
    singleSavedMovieDeleteButton: {
      position: "absolute",
      bottom: 0,
      left: 0,
    },
  };
});
export default useStyles;
