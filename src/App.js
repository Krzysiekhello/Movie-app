import { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import LoginProvider from "./Context/LoginContext";
import MovieProvider from "./Context/MoviesContext";

import LoginPage from "./Components/LoginPage";
import MovieSearchComp from "./Components/MovieSearchComp";

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
                <MovieSearchComp />
              )}
            </div>
          </ThemeProvider>
        </LoginProvider>
      </MovieProvider>
    </Router>
  );
}

export default App;
