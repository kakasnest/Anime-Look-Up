import React from "react";

import Anime from "./Anime";
import { useFiltered } from "../../../hooks/useFiltered";

const FilteredAnimeList = ({ anime }) => {
  const {
    states: { title }
  } = useFiltered();

  const compare = (anime) => {
    const titleToCheck = title.trim().toLowerCase();
    const animeToCheck = anime.title.trim().toLowerCase();

    const check = JSON.stringify(animeToCheck).includes(titleToCheck);

    if (check === true) return anime;
  };

  return (
    <div>
      {anime.filter(compare).map((animeObject) => (
        <Anime key={animeObject.url} anime={animeObject} />
      ))}
    </div>
  );
};

export default FilteredAnimeList;
