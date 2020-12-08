import React from "react";

import Option from "./Option";
import LookUp from "./LookUp";
import Checkbox from "./Checkbox";
import { useFiltered } from "../../../hooks/useFiltered";

const Filter = () => {
  const {
    filterTypes: { statuses, genres, types, title },
    filterMethods: { changeSubmit, changeStatus, changeType, changeGenre }
  } = useFiltered();

  return (
    <form onSubmit={changeSubmit}>
      <h2>Filter</h2>
      <LookUp label="Title" />
      <Option label="Status" options={statuses} changeMethod={changeStatus} />
      <Option label="Types" options={types} changeMethod={changeType} />
      <Checkbox label="Genres" options={genres} changeMethod={changeGenre} />
      <button type="submit">Apply filter</button>
    </form>
  );
};

export default Filter;
