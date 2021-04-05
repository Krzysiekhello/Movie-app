import { useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import LoginProvider from "./Context/LoginContext";
import MovieProvider from "./Context/MoviesContext";

import LoginPage from "./Components/LoginPage";
import MovieSearchComp from "./Components/MovieSearchComp";
import SavedMovies from "./Components/SavedMovies";

function App() {
  const [isLoginAndPasswordCorrect, setIsLoginAndPasswordCorrect] = useState(
    false
  );

  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Oswald"],
    },
  });
  return (
    <Router>
      <MovieProvider>
        <LoginProvider>
          <ThemeProvider theme={theme}>
            <div>
              {!isLoginAndPasswordCorrect ? (
                <LoginPage setIsDataCorrect={setIsLoginAndPasswordCorrect} />
              ) : (
                <>
                  <Route path="/" exact component={MovieSearchComp} />
                  <Route path="/saved" component={SavedMovies} />
                  {/* <Route path="/contact" component={MovieSearchComp} /> */}
                </>
              )}
            </div>
          </ThemeProvider>
        </LoginProvider>
      </MovieProvider>
    </Router>
  );
}

export default App;
