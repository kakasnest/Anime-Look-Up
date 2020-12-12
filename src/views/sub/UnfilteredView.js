import React from "react";

import Filter from "../building-blocks/filter/Filter";
import { useAnime } from "../../hooks/useAnime";
import AnimeList from "../building-blocks/animelist/AnimeList";

const UnfilteredView = () => {
  const { anime } = useAnime();

  return (
    <div>
      <Filter />
      <h2>Popular anime you might want to check!</h2>
      <AnimeList anime={anime} />
    </div>
  );
};

export default UnfilteredView;
