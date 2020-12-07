import React from "react";

const LookUp = ({ label }) => {
  return (
    <div>
      <label>{label}:</label>
      <input type="text" minLength="3" />
    </div>
  );
};

export default LookUp;
