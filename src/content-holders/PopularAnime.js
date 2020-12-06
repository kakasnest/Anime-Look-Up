import React, { useEffect, useState } from "react";
import axios from "axios";

import { useFavourites } from "../hooks/useFavourites";

const PopularAnime = () => {
  const [popularAnime, setPopularAnime] = useState([]);
  const { favourites, add, remove } = useFavourites();

  const load = async () => {
    const {
      data: { results }
    } = await axios(process.env.REACT_APP_API_URL);
    console.log(results);
    setPopularAnime(results);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h2>Some popular anime you might want to check</h2>
      <div>
        {popularAnime.map((animeObject) => (
          <div key={animeObject.url}>{animeObject.url}</div>
        ))}
      </div>
    </div>
  );
};

export default PopularAnime;
