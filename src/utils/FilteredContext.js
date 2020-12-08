import React, { createContext, useState } from "react";

export const FilteredContext = createContext();

export const FilteredProvider = (props) => {
  const statuses = ["airing", "completed", "upcoming"];
  const types = ["tv", "ona", "movie", "special", "ova", "music"];
  const genres = [
    { genre: "Action", id: "1" },
    { genre: "Adventure", id: "2" },
    { genre: "Cars", id: "3" },
    { genre: "Comedy", id: "4" },
    { genre: "Dementia", id: "5" },
    { genre: "Demons", id: "6" },
    { genre: "Mystery", id: "7" },
    { genre: "Drama", id: "8" },
    { genre: "Ecchi", id: "9" },
    { genre: "Fantasy", id: "10" },
    { genre: "Game", id: "11" },
    { genre: "Hentai", id: "12" },
    { genre: "Historical", id: "13" },
    { genre: "Horror", id: "14" },
    { genre: "Kids", id: "15" },
    { genre: "Magic", id: "16" }
  ];

  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [genre, setGenre] = useState([]);

  const changeSubmit = (e) => {
    e.preventDefault();
    setSubmitted(!submitted);
  };

  const changeStatus = (e) => {
    setStatus(e.target.value);
  };

  const changeType = (e) => {
    setType(e.target.value);
  };

  const changeGenre = (e) => {
    setGenre([...genre, e.target.value]);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <FilteredContext.Provider
      value={{
        filterTypes: { statuses, genres, types, title },
        filterMethods: {
          changeSubmit,
          changeStatus,
          changeType,
          changeGenre,
          changeTitle
        },
        submitted
      }}
      {...props}
    />
  );
};
