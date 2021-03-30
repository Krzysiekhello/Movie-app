import { useState } from "react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
    <ThemeProvider theme={theme}>
      <div>
        {isLoginAndPasswordCorrect ? (
          <MovieSearchComp />
        ) : (
          <LoginPage setIsDataCorrect={setIsLoginAndPasswordCorrect} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
