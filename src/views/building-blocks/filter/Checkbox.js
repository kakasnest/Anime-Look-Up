import React from "react";

const Checkbox = ({ label, options, changeMethod }) => {
  return (
    <div>
      <label>{label}:</label>
      <div>
        {options.map((genre) => {
          return (
            <label key={genre.genre}>
              <input type="checkbox" value={genre.id} onChange={changeMethod} />
              {genre.genre}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Checkbox;
