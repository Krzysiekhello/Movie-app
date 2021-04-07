import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const Provider = ({ children }) => {
  const [location, setLocation] = useState("");
  const handleLocalStorage = (name, rememberMe) => {
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("name", rememberMe ? name : "");
    localStorage.setItem("savedMovies", "[]");
  };
  return (
    <LoginContext.Provider
      value={{ handleLocalStorage, setLocation, location }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default Provider;
