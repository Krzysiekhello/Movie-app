import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "20px",
      transition: "0.3s linear",
      [`${theme.breakpoints.up("md")}`]: {
        width: "30%",
      },

      "&:hover": {
        padding: "10px",
      },
    },
    singleSavedMovieCard: {
      position: "relative",
      backgroundColor: "#ef6c00",
    },

    singleSavedMovieCardMedia: {
      height: "565px",
    },
    singleSavedMovieDeleteButton: {
      position: "absolute",
      bottom: "8.5%",
      left: 0,
    },
  };
});
export default useStyles;
