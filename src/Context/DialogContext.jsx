import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const Provider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [movieInformation, setMovieInformation] = useState(null);
  const handleModal = (e, title, rate, description, relaseDate, posterPath) => {
    e.preventDefault();
    setMovieInformation({ title, rate, description, relaseDate, posterPath });
    setOpenModal(true);
  };

  return (
    <ModalContext.Provider
      value={{ handleModal, movieInformation, openModal, setOpenModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default Provider;
