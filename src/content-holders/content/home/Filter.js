import React from "react";

import Option from "./filter/Option";
import LookUp from "./filter/LookUp";
import Checkbox from "./filter/Checkbox";

const Filter = () => {
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

  return (
    <form>
      <h2>Filter</h2>

      <LookUp label="Title" />
      <Option label="Status" options={statuses} />
      <Option label="Types" options={types} />
      <Checkbox label="Genres" options={genres} />
      <button type="submit">Apply filter</button>
    </form>
  );
};

export default Filter;
