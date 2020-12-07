import React from "react";

import { useFavourites } from "../../hooks/useFavourites";
import Anime from "../building-blocks/animelist/Anime";

const Favourites = () => {
  const { favourites, add, remove, reset } = useFavourites();

  return (
    <div>
      <h1>Your favourites:</h1>
      <div>
        {favourites.map((animeObject) => (
          <Anime key={animeObject.url} anime={animeObject} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
