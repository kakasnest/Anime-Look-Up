import React from "react";

import Anime from "./Anime";
import { useFiltered } from "../../../hooks/useFiltered";

const FilteredAnimeList = ({ anime }) => {
  const {
    states: { title, type }
  } = useFiltered();

  const compare = (anime) => {
    const typeCheck = anime.type === type;
    const titleCheck = JSON.stringify(anime.title).includes(title);

    return typeCheck || titleCheck;
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
