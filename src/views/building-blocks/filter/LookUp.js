import React from "react";

const LookUp = ({ label, changeMethod }) => {
  return (
    <div>
      <label>{label}:</label>
      <input type="text" onChange={changeMethod} max={30} />
    </div>
  );
};

export default LookUp;
