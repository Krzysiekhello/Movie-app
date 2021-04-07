import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    appBar: {
      backgroundColor: "#ef6c00",
    },
    drawerList: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      backgroundColor: "#2196f3",
    },
    drawerSectionWithButton: {
      backgroundColor: "#ef6c00",
      height: "57px",
    },

    appBarLink: {
      textDecoration: "none",
      fontSize: "20px",
      color: "#212121",
    },
  };
});

export default useStyles;
