import React from "react";

import Anime from "./Anime";
import { useAnime } from "../hooks/useAnime";

const AnimeList = () => {
  const anime = useAnime();

  return (
    <div>
      <h2>Some popular anime you might want to check</h2>
      <div>
        {anime.map((animeObject) => (
          <Anime key={animeObject.url} anime={animeObject} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
