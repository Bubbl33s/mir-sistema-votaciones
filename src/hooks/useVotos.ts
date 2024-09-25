import { useContext } from "react";
import { VotosContext } from "../context/VotosContext";

export const useVotos = () => {
  const context = useContext(VotosContext);

  if (!context) {
    throw new Error("useVotos must be used within a VotosProvider");
  }
  return context;
};
