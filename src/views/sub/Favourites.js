import React from "react";

import { useFavourites } from "../../hooks/useFavourites";
import AnimeList from "../building-blocks/animelist/AnimeList";

const Favourites = () => {
  const { favourites } = useFavourites();

  return (
    <div>
      <h2>Your favourites</h2>
      <AnimeList anime={favourites} />
    </div>
  );
};

export default Favourites;
