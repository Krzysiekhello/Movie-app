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
    },
  };
});
export default useStyles;
