import React from "react";

import Filter from "../building-blocks/filter/Filter";
import AnimeList from "../building-blocks/animelist/AnimeList";
import { useAnime } from "../../hooks/useAnime";
import FilteredView from "../building-blocks/filter/FilteredView";
import { useFiltered } from "../../hooks/useFiltered";

const Home = () => {
  const { anime } = useAnime();
  const { submitted } = useFiltered();

  if (submitted) {
    return <FilteredView />;
  }

  return (
    <div>
      <Filter />
      <h2>Some popular anime you might want to check out!</h2>
      <AnimeList anime={anime} />
    </div>
  );
};

export default Home;
