import { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import ContactComp from "./Components/ContactComp";
import LoginPage from "./Components/LoginPage";
import MovieSearchComp from "./Components/MovieSearchComp";
import SavedMovies from "./Components/SavedMovies";

function App() {
  const [isLoginAndPasswordCorrect, setIsLoginAndPasswordCorrect] = useState(
    false
  );
  const [openSnackBar, setOpenSnackbar] = useState(true);

  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Oswald"],
    },
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          {!isLoginAndPasswordCorrect ? (
            <LoginPage setIsDataCorrect={setIsLoginAndPasswordCorrect} />
          ) : (
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <MovieSearchComp
                    openSnackBar={openSnackBar}
                    setOpenSnackbar={setOpenSnackbar}
                  />
                )}
              />
              <Route path="/saved" render={() => <SavedMovies />} />
              <Route path="/contact" component={ContactComp} />
            </Switch>
          )}
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
