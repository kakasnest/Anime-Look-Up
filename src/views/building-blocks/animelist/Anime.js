import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

import { useFavourites } from "../../../hooks/useFavourites";

const Anime = ({ anime }) => {
  const { favourites, add, remove } = useFavourites();

  return (
    <div>
      <img src={anime.image_url} alt={JSON.stringify(anime.title) + " image"} />
      <div>{anime.title}</div>
      <div>{anime.score}</div>
      <div>{anime.synopsis}</div>
      <button
        onClick={
          favourites.includes(anime) ? () => remove(anime) : () => add(anime)
        }
      >
        {favourites.includes(anime.title) ? <FcLike /> : <FcLikePlaceholder />}
      </button>
    </div>
  );
};

export default Anime;
