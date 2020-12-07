import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AnimeContext = createContext();

export const AnimeProvider = (props) => {
  const [anime, setAnime] = useState([]);

  const load = async () => {
    const {
      data: { results }
    } = await axios(process.env.REACT_APP_API_URL);
    console.log(results);
    setAnime(results);
  };

  useEffect(() => {
    load();
  }, []);

  return <AnimeContext.Provider value={anime} {...props} />;
};
