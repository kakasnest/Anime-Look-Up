import React from "react";

import Filter from "../building-blocks/filter/Filter";
import AnimeList from "../building-blocks/animelist/AnimeList";

const Home = () => {
  return (
    <div>
      <Filter />
      <AnimeList />
    </div>
  );
};

export default Home;
