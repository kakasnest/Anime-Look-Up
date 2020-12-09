import React, { createContext, useState } from "react";

export const FilteredContext = createContext();

export const FilteredProvider = (props) => {
  const types = ["TV", "ona", "movie", "special", "ova", "music"];

  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const changeSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const changeType = (e) => {
    setType(e.target.value);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const reset = (e) => {
    setTitle("");
    setSubmitted(false);
    setType("");
  };

  return (
    <FilteredContext.Provider
      value={{
        filterTypes: { types, title },
        filterMethods: {
          changeSubmit,
          changeType,
          changeTitle
        },
        states: { submitted, title, type },
        reset
      }}
      {...props}
    />
  );
};
