import React from "react";

const UserInput = () => {
  return (
    <form>
      <h2>
        If you aren't interested in the popular ones you should hit up something
        else!
      </h2>

      <label>Title:</label>
      <input type="text" minLength="3" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInput;
