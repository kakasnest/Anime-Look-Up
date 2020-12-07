import React from "react";

import { FavouritesProvider } from "./utils/FavouritesContext";
import Content from "./content-holders/Content";
import Header from "./content-holders/Header";
import { AnimeProvider } from "./utils/AnimeContext";

const App = () => {
  return (
    <div>
      <Header />
      <AnimeProvider>
        <FavouritesProvider>
          <Content />
        </FavouritesProvider>
      </AnimeProvider>
    </div>
  );
};

export default App;
