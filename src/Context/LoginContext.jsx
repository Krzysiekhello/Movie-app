import React, { createContext } from "react";

export const LoginContext = createContext();

const Provider = ({ children }) => {
  const handleLocalStorage = (name, rememberMe) => {
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("name", rememberMe ? name : "");
    localStorage.setItem("movies", "[]");
  };
  return (
    <LoginContext.Provider value={{ handleLocalStorage }}>
      {children}
    </LoginContext.Provider>
  );
};

export default Provider;
