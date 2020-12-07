import { useContext } from "react";
import { AnimeContext } from "../utils/AnimeContext";

export const useAnime = () => {
  const context = useContext(AnimeContext);
  return context;
};
