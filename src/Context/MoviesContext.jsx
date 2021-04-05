import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

export const MovieContext = createContext();

const Provider = ({ children }) => {
  const [movieFetchedData, setMovieFetchedData] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  const [isMovieFetchdDataArrEmpty, setIsMovieFetchedDataArrEmpty] = useState(
    false
  );

  const reqForUserLookingMovie = (movieTitle) => {
    if (movieTitle.length === 0) return;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f22facd72eb81c0963f9b977fbb7553c&query=${movieTitle}`
      )
      .then((res) => {
        if (res.data.results.length === 0) {
          setIsMovieFetchedDataArrEmpty(true);
        } else setIsMovieFetchedDataArrEmpty(false);
        setMovieFetchedData(res.data);
      });
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f22facd72eb81c0963f9b977fbb7553c`
      )
      .then((res) => setTopRatedMovies(res.data));
  }, []);
  const getMovie = (e, title, posterPath, movieRate) => {
    e.preventDefault();
    const arrayWithSavedMovies = JSON.parse(
      localStorage.getItem("savedMovies" || "[]")
    );
    if (arrayWithSavedMovies !== 0) {
      const isMovieAlreadyInSavedMovieArr = arrayWithSavedMovies.filter(
        (el) => el.title === title
      );
      if (isMovieAlreadyInSavedMovieArr.length > 0) return;
    }

    arrayWithSavedMovies.push({ title, posterPath, movieRate });
    localStorage.setItem("savedMovies", JSON.stringify(arrayWithSavedMovies));
  };

  const deleteMovieFromSavedMovies = (e, title) => {
    e.preventDefault();
    const arrayWithSavedMovies = JSON.parse(
      localStorage.getItem("savedMovies")
    );
    const arrayWithoutDeletedMovie = arrayWithSavedMovies.filter(
      (movie) => movie.title !== title
    );
    localStorage.setItem(
      "savedMovies",
      JSON.stringify(arrayWithoutDeletedMovie)
    );
  };

  return (
    <MovieContext.Provider
      value={{
        reqForUserLookingMovie,
        movieFetchedData,
        topMovies: topRatedMovies,
        getMovie,
        isMovieArrEmpty: isMovieFetchdDataArrEmpty,
        deleteMovieFromSavedMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default Provider;
