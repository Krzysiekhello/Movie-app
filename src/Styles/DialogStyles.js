import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      justifyContent: "center",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      width: "85%",
      height: "82%",
      borderRadius: 10,
      boxShadow: theme.shadows[12],
      padding: theme.spacing(2, 4, 3),
      backgroundColor: "#2196f3",
      [`${theme.breakpoints.up("md")}`]: {
        width: "60%",
        left: "36%",
      },
    },
    modalReadMoremModal: {
      margin: "5px 0",
    },
    dialogImage: {
      height: "100%",

      [`${theme.breakpoints.up("md")}`]: {
        position: "absolute",
        height: "90%",
        top: "50%",
        transform: "translateY(-50%)",
        right: "2.5%",
        borderRadius: "10px",
      },
    },
    dialogCloseButton: {
      position: "absolute",
      left: -8,
      top: "4.8%",
      zIndex: "10",
      fontSize: "65px",
      backgroundColor: "ef6c00",
      [`${theme.breakpoints.up("md")}`]: {
        left: "3%",
        top: "4%",
      },
    },
  };
});
export default useStyles;
