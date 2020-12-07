import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

import { useFavourites } from "../../../hooks/useFavourites";

const Anime = ({ anime }) => {
  const { favourites, add, remove } = useFavourites();

  return (
    <div>
      <img src={anime.image_url} alt={JSON.stringify(anime.title) + " image"} />
      <div>Title: {anime.title}</div>
      <div>Score on MyAnimeList: {anime.score}</div>
      <div>
        Synopsis: {anime.synopsis}
        <a href={anime.url} target="_blank" rel="noopener noreferrer">
          link
        </a>
      </div>
      <button
        onClick={
          favourites.includes(anime) ? () => remove(anime) : () => add(anime)
        }
      >
        {favourites.includes(anime) ? <FcLike /> : <FcLikePlaceholder />}
      </button>
    </div>
  );
};

export default Anime;
