import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

import useLocalStorage from "../hooks/useLocalStorage";

export const AnimeContext = createContext();

export const AnimeProvider = (props) => {
  return (
    <AnimeContext.Provider
      value={{ images, previous, next, load, index }}
      {...props}
    />
  );
};
