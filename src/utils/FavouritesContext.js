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

  const add = (id) => {
    dispatch({ type: ADD, payload: id });
    setValue([...values, id]);
  };

  const remove = (id) => {
    console.log("called");
    dispatch({ type: REMOVE, payload: id });
    deleteValue(id);
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, add, remove, reset }}
      {...props}
    />
  );
};
