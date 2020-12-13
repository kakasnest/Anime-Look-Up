import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AnimeContext = createContext();

export const AnimeProvider = (props) => {
  const [anime, setAnime] = useState([]);

  const load = async (page) => {
    const {
      data: { results }
    } = await axios(process.env.REACT_APP_API_URL + page);
    setAnime((old) => {
      return [...old, ...results];
    });
  };

  const getFivePagesOfData = () => {
    for (let index = 1; index < 6; index++) {
      load(index);
    }
  };

  useEffect(() => {
    getFivePagesOfData();
  }, []);

  return <AnimeContext.Provider value={{ anime }} {...props} />;
};
