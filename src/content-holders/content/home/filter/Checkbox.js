import React from "react";

const Checkbox = ({ label, options }) => {
  return (
    <div>
      <label>{label}:</label>
      <div>
        {options.map((genre) => {
          return (
            <div>
              <input type="checkbox" key={genre} value={genre} />
              {genre.genre}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkbox;
