import React from "react";

import { FavouritesProvider } from "./utils/FavouritesContext";
import Content from "./views/main/Content";
import Header from "./views/main/Header";
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
