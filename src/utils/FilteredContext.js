import React, { createContext, useState } from "react";

export const FilteredContext = createContext();

export const FilteredProvider = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState("");

  const changeSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const reset = (e) => {
    setTitle("");
    setSubmitted(false);
  };

  return (
    <FilteredContext.Provider
      value={{
        filterTypes: { title },
        filterMethods: {
          changeSubmit,
          changeTitle
        },
        states: { submitted, title },
        reset
      }}
      {...props}
    />
  );
};
