import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { BsFillCollectionFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <h1>Anime-Look-Up</h1>
      <div>
        <NavLink to="/">
          Home
          <IoHome />
        </NavLink>
        <NavLink to="/favourites">
          Favourites
          <BsFillCollectionFill />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
