import React from "react";

const Filter = () => {
  const statuses = ["airing", "completed", "upcoming"];
  const types = ["tv", "ona", "movie", "special", "ova", "music"];
  // {title: 'Action', id: 1}
  const genres = [
    { genre: "Action", id: "1" },
    { genre: "Adventure", id: "2" },
    { genre: "Cars", id: "3" },
    { genre: "Comedy", id: "4" },
    { genre: "Dementia", id: "5" },
    { genre: "Demons", id: "6" },
    { genre: "Mystery", id: "7" },
    { genre: "Drama", id: "8" },
    { genre: "Ecchi", id: "9" },
    { genre: "Fantasy", id: "10" },
    { genre: "Game", id: "11" },
    { genre: "Hentai", id: "12" },
    { genre: "Historical", id: "13" },
    { genre: "Horror", id: "14" },
    { genre: "Kids", id: "15" },
    { genre: "Magic", id: "16" }
  ];

  return (
    <form>
      <h2>Search</h2>

      <label>Title:</label>
      <input type="text" minLength="3" />

      <label>Status:</label>
      <select>
        <option></option>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>

      <label>Types:</label>
      <select>
        <option></option>
        {types.map((type) => (
          <option key={type} value={type}>
            0
          </option>
        ))}
      </select>

      <label>Genre:</label>
      <div>
        {genres.map((genre, index) => {
          return (
            <div>
              <input type="checkbox" key={genre} value={genre} />
              {0}
              {}
              {JSON.stringify(Object.keys(genre)[0])}
            </div>
          );
        })}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Filter;
