import React from "react";

const Anime = ({ anime }) => {
  return (
    <div>
      <img src={anime.image_url} alt={JSON.stringify(anime.title) + " image"} />
      <div>{anime.title}</div>
      <div>{anime.score}</div>
      <div>{anime.synopsis}</div>
    </div>
  );
};

export default Anime;
