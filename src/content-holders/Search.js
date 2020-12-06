import React from "react";

const UserInput = () => {
  return (
    <form>
      <h2>Search</h2>

      <label>Title:</label>
      <input type="text" minLength="3" />

      <label>Status:</label>
      <select>
        <option></option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInput;
