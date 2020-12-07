import React from "react";

import Filter from "../building-blocks/filter/Filter";
import AnimeList from "../building-blocks/animelist/AnimeList";
import { useAnime } from "../../hooks/useAnime";

const Home = () => {
  const { anime } = useAnime();

  return (
    <div>
      <Filter />
      <h2>Some popular anime you might want to check out!</h2>
      <AnimeList anime={anime} />
    </div>
  );
};

export default Home;
