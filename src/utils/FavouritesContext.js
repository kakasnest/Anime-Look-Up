import React, { createContext, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import {
  initialState,
  reducer,
  REMOVE,
  ADD,
  RESET
} from "../reducers/FavouriteReducer";

export const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
  const { values, setValue, deleteValue } = useLocalStorage(
    "favourites",
    initialState
  );
  const [favourites, dispatch] = useReducer(reducer, values);

  const add = (anime) => {
    dispatch({ type: ADD, payload: anime });
    setValue([...values, anime]);
  };

  const remove = (anime) => {
    console.log("called");
    dispatch({ type: REMOVE, payload: anime });
    deleteValue(anime);
  };

  const reset = () => {
    dispatch({ type: RESET });
    setValue([]);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, add, remove, reset }}
      {...props}
    />
  );
};
