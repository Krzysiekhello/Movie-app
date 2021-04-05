import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      positon: "realtive",
      minHeight: "100vh",
      backgroundColor: "#2196f3",
      alignItems: "center",
    },
    savedMoviesDiv: {
      marginTop: "100px",
    },
    savedMoviesTypography: {
      marginTop: "55px",
    },
  };
});
export default useStyles;
