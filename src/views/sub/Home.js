import React from "react";
import { useFiltered } from "../../hooks/useFiltered";
import UnfilteredView from "./UnfilteredView";
import FilteredView from "./FilteredView";

const Home = () => {
  const {
    states: { submitted }
  } = useFiltered();

  if (submitted) return <FilteredView />;
  else return <UnfilteredView />;
};

export default Home;
