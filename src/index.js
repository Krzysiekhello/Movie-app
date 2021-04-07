import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoginProvider from "./Context/LoginContext";
import MovieProvider from "./Context/MoviesContext";
import ModalProvider from "./Context/DialogContext";

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <MovieProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </MovieProvider>
    </LoginProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
