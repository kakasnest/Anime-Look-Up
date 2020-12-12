import React from "react";

import { useAnime } from "../../hooks/useAnime";
import FilteredAnimeList from "../building-blocks/animelist/FilteredAnimeList";
import { useFiltered } from "../../hooks/useFiltered";

const UnfilteredView = () => {
  const { anime } = useAnime();
  const {
    states: { submitted },
    reset
  } = useFiltered();

  return (
    <div className="filtered-view">
      <button className="remove-filter" onClick={reset} disabled={!submitted}>
        Remove filters
      </button>
      <FilteredAnimeList anime={anime} />
    </div>
  );
};

export default UnfilteredView;
