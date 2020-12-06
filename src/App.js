import React from "react";

import { FavouritesProvider } from "./utils/FavouritesContext";
import Content from "./content-holders/Content";
import Header from "./content-holders/Header";

const App = () => {
  return (
    <div>
      <Header />
      <FavouritesProvider>
        <Content />
      </FavouritesProvider>
    </div>
  );
};

export default App;
