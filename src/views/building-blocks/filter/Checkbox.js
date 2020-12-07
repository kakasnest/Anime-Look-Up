import React from "react";

const Checkbox = ({ label, options }) => {
  return (
    <div>
      <label>{label}:</label>
      <div>
        {options.map((genre) => {
          return (
            <label key={genre.genre}>
              <input type="checkbox" value={genre.id} />
              {genre.genre}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Checkbox;
