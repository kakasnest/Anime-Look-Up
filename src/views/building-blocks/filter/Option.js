import React from "react";

const Option = ({ label, options, changeMethod }) => {
  return (
    <div>
      <label>{label}:</label>
      <select onChange={changeMethod}>
        <option></option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Option;
