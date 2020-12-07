import React from "react";

import Filter from "./home/Filter";
import AnimeList from "./home/anime/AnimeList";

const Home = () => {
  return (
    <div>
      <Filter />
      <AnimeList />
    </div>
  );
};

export default Home;
