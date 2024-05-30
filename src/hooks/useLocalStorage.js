import { useState } from "react";

export default function useLocalStorage(favoriteMovies) {
  const getLocalStorage = () => {
    const addLocalStorage =
      JSON.parse(localStorage.getItem(favoriteMovies)) || [];
    return addLocalStorage;
  };

  const updateLocalStorage = (data) => {
    localStorage.setItem(favoriteMovies, JSON.stringify(data));
  };

  return {
    getLocalStorage,
    updateLocalStorage,
  };
}
