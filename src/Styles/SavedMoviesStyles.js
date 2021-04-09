import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#2196f3",
    },

    savedMoviesTypography: {
      marginTop: "55px",
      [`${theme.breakpoints.up("md")}`]: {
        marginTop: "70px",
      },
    },
    singleMovieDiv: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      [`${theme.breakpoints.up("md")}`]: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },
  };
});
export default useStyles;
