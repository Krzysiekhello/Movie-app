import React, { useContext, useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { Alert, AlertTitle } from "@material-ui/lab";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faUsers } from "@fortawesome/free-solid-svg-icons";

import { LoginContext } from "../Context/LoginContext";
import useStyles from "../Styles/loginPage";

const LoginPage = ({ setIsDataCorrect }) => {
  const classes = useStyles();
  const { handleLocalStorage } = useContext(LoginContext);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [isItLoginOrPasswordEmpty, setIsItLoginOrPasswordEmpty] = useState(
    false
  );
  const [
    isItLoginOrPasswordIncorect,
    setIsItLoginOrPasswordIncorect,
  ] = useState(false);

  const valueHandler = (e) => {
    e.preventDefault();
    if (e.target.name === "login") setLogin(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };
  const checkingData = (e) => {
    e.preventDefault();

    if (login.length <= 2) return setIsItLoginOrPasswordEmpty(true);

    if (password.length < 6) return setIsItLoginOrPasswordEmpty(true);

    if (password.toString() !== "12345a") {
      setIsItLoginOrPasswordIncorect(true);

      setTimeout(() => {
        setIsItLoginOrPasswordIncorect(false);
      }, 3000);
    } else {
      setIsDataCorrect(true);
      return handleLocalStorage(login, checkbox);
    }
  };

  useEffect(() => {
    return () => {
      setLogin("");
      setPassword("");
      setCheckbox(false);
      setIsItLoginOrPasswordEmpty(false);
      setIsItLoginOrPasswordIncorect(false);
    };
  }, []);

  return (
    <div className={classes.root}>
      {isItLoginOrPasswordIncorect && (
        <Alert className={classes.loginPageAlert} severity="error">
          <AlertTitle>Error</AlertTitle>
          Your data is incorrect — <strong>check it out!</strong>
        </Alert>
      )}
      <Card raised={true} className={classes.loginPageCard}>
        <Container>
          <CssBaseline />

          <Typography
            component="h1"
            variant="h2"
            style={{ textAlign: "center" }}
          >
            Sign in
          </Typography>
          <div className={classes.loginPageIcon}>
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <form
            noValidate
            className={classes.loginPageform}
            onSubmit={(e) => checkingData(e)}
          >
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth={true}
              id="login"
              label="Login"
              name="login"
              autoComplete="login"
              autoFocus={true}
              value={login}
              onChange={(e) => valueHandler(e)}
              helperText={isItLoginOrPasswordEmpty && "Min. 3 characters"}
              error={isItLoginOrPasswordEmpty}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth={true}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              value={password}
              onChange={(e) => valueHandler(e)}
              helperText={isItLoginOrPasswordEmpty && "Min. 6 characters"}
              error={isItLoginOrPasswordEmpty}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="checkbox"
                  value={checkbox}
                  onClick={() => setCheckbox((prevState) => !prevState)}
                />
              }
              label="Remember Me"
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              startIcon={<FontAwesomeIcon icon={faPaperPlane} />}
              className={classes.loginPageDivButton}
            >
              Sign In
            </Button>
          </form>
        </Container>
      </Card>
    </div>
  );
};

export default LoginPage;
