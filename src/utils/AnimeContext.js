import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AnimeContext = createContext();

export const AnimeProvider = (props) => {
  const [anime, setAnime] = useState([]);

  const load = async (page) => {
    const {
      data: { results }
    } = await axios(process.env.REACT_APP_API_URL + page);
    console.log(results);
    setAnime(results);
  };
  useEffect(() => {
    load(1);
  }, []);

  return <AnimeContext.Provider value={{ anime, load }} {...props} />;
};
