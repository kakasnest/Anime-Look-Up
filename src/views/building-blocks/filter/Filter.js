import React from "react";

import LookUp from "./LookUp";
import { useFiltered } from "../../../hooks/useFiltered";

const Filter = () => {
  const {
    filterMethods: { changeSubmit, changeTitle },
    states: { title, type }
  } = useFiltered();

  return (
    <form onSubmit={changeSubmit}>
      <h2>Filter</h2>
      <LookUp label="Title" changeMethod={changeTitle} />
      <button type="submit" disabled={Object.is(title, "")}>
        Apply filter
      </button>
    </form>
  );
};

export default Filter;
