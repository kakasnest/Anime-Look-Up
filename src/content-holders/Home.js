import React, { useState } from "react";

import UserInput from "./UserInput";

const Home = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <h1>Popular anime below</h1>
      <UserInput />
    </div>
  );
};

export default Home;
