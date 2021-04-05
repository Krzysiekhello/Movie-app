import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: "relative",
      height: "100vh",
      width: "100vw",
      backgroundColor: "#2196f3",
    },
    loginPageAlert: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    },
    loginPageCard: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "60%",
      height: "60%",
      [`${theme.breakpoints.only("xs")} and (orientation: landscape)`]: {
        height: "95%",
      },
      [`${theme.breakpoints.only("xs")} and (orientation: portrait)`]: {
        height: "70%",
        width: "80%",
      },

      [`${theme.breakpoints.up("sm")} and (orientation: landscape)`]: {
        height: "90%",
      },
    },
    loginPageIcon: {
      position: "absolute",
      left: "50%",
      top: "20%",
      transform: "translate(-50%, -50%)",
      fontSize: "4rem",
      [`${theme.breakpoints.only("xs")} and (orientation: landscape)`]: {
        display: "none",
      },
      [`${theme.breakpoints.only("xs")} and (orientation: portrait)`]: {
        top: "23%",
      },
      [`${theme.breakpoints.up("sm")} and (orientation: landscape)`]: {
        display: "none",
      },
      [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
        display: "block",
      },
    },
    loginPageform: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "60%",
      "& button": {
        marginTop: "0.625rem",
      },

      [`${theme.breakpoints.only("xs")} and (orientation: portrait)`]: {
        top: "55%",
      },
      [`${theme.breakpoints.only("xs")} and (orientation: landscape)`]: {
        top: "58%",
      },
      [`${theme.breakpoints.only("sm")} and (orientation: landscape)`]: {
        top: "59%",
      },
    },
  };
});
export default useStyles;
