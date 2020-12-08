import { useFiltered } from "../../../hooks/useFiltered";
import React from "react";

const FilteredView = () => {
  const {
    filterMethods: { changeSubmit }
  } = useFiltered();

  return <button onClick={changeSubmit}>remove filters</button>;
};

export default FilteredView;
