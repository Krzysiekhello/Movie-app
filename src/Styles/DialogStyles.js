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
    },
    modalReadMoremModal: {
      margin: "5px 0",
    },
    dialogCloseButton: {
      position: "absolute",
      left: -10,
      top: "4.5%",
      zIndex: "10",
      fontSize: "70px",
    },
  };
});
export default useStyles;
