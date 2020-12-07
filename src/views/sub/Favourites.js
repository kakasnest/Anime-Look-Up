import React from "react";

import { useFavourites } from "../../hooks/useFavourites";
import AnimeList from "../building-blocks/animelist/AnimeList";

const Favourites = () => {
  const { favourites, add, remove, reset } = useFavourites();

  return (
    <div>
      <h1>Your favourites:</h1>
      <AnimeList anime={favourites} />
    </div>
  );
};

export default Favourites;
