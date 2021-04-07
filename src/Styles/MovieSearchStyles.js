import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#2196f3",
      alignItems: "center",
    },

    card: {
      position: "absolute",
      left: "50%",
      top: "10%",
      transform: "translate(-50%,0)",
      backgroundColor: "transparent",
      [`${theme.breakpoints.only("xs")} and (orientation:portrait)`]: {
        width: "68%",
      },
    },
    searchingButton: {
      marginLeft: "5px",
      marginRight: "5px",
      backgroundColor: "#ef6c00",
      zIndex: 10,
      "&:active": {
        backgroundColor: "#ef6c00",
      },
      "&:focus": {
        backgroundColor: "#ef6c00",
      },
    },
    text: {
      backgroundColor: "#2196f3",
      "&:active": {
        backgroundColor: "#ef6c00",
      },
    },
    listOfMovies: {
      marginTop: "150px",
    },
  };
});
export default useStyles;
