import React from "react";

import Option from "./Option";
import LookUp from "./LookUp";
import { useFiltered } from "../../../hooks/useFiltered";

const Filter = () => {
  const {
    filterTypes: { types },
    filterMethods: { changeSubmit, changeType, changeTitle },
    states: { title, type }
  } = useFiltered();

  return (
    <form onSubmit={changeSubmit}>
      <h2>Filter</h2>
      <LookUp label="Title" changeMethod={changeTitle} />
      <Option label="Types" options={types} changeMethod={changeType} />
      <button
        type="submit"
        disabled={Object.is(title, "") && Object.is(type, "")}
      >
        Apply filter
      </button>
    </form>
  );
};

export default Filter;
