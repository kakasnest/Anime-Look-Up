import React from "react";

const Option = ({ label, options }) => {
  return (
    <div>
      <label>{label}:</label>
      <select>
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
