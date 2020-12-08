import { useContext } from "react";
import { FilteredContext } from "../utils/FilteredContext";

export const useFiltered = () => {
  const context = useContext(FilteredContext);
  return context;
};
