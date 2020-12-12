import React from "react";

import { FavouritesProvider } from "./utils/FavouritesContext";
import Content from "./views/main/Content";
import Header from "./views/main/Header";
import { AnimeProvider } from "./utils/AnimeContext";
import { FilteredProvider } from "./utils/FilteredContext";

const App = () => {
  return (
    <div>
      <Header />
      <AnimeProvider>
        <FavouritesProvider>
          <FilteredProvider>
            <Content />
          </FilteredProvider>
        </FavouritesProvider>
      </AnimeProvider>
    </div>
  );
};

export default App;
