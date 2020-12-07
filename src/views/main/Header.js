import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Anime-Look-Up</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favourites">Favourites</NavLink>
    </div>
  );
};

export default Header;
