import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
      backgroundColor: "#2196f3",
      alignItems: "center",
      justifyContent: "center",
    },
    contactForm: {
      display: "flex",
      width: "70%",
      flexDirection: "column",
      [`${theme.breakpoints.up("md")}`]: {
        width: "40%",
      },
    },
  };
});
export default useStyles;
