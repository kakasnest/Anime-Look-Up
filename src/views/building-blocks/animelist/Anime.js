import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

import { useFavourites } from "../../../hooks/useFavourites";

const Anime = ({ anime }) => {
  const { favourites, add, remove } = useFavourites();

  return (
    <div className="anime">
      <img src={anime.image_url} alt={JSON.stringify(anime.title) + " image"} className="animeImage" />
      <div>Title: {anime.title}</div>
      <div>Score on MyAnimeList: {anime.score}</div>
      <div>
        Synopsis: {anime.synopsis}
        <a href={anime.url} target="_blank" rel="noopener noreferrer">
          link
        </a>
      </div>
      <div>Episodes: {anime.episodes}</div>
      <div>Type: {anime.type}</div>
      <div>
        <button
          onClick={
            favourites.includes(anime) ? () => remove(anime) : () => add(anime)
          }
        >
          {favourites.includes(anime) ? <FcLike /> : <FcLikePlaceholder />}
        </button>
      </div>
    </div>
  );
};

export default Anime;
