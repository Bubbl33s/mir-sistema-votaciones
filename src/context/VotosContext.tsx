import { createContext, Dispatch, ReactNode, useReducer } from "react";

import {
  VotosActions,
  votosReducer,
  VotosState,
  initialState,
} from "../reducers/votosReducer";

type VotosContextProps = {
  state: VotosState;
  dispatch: Dispatch<VotosActions>;
};

type VotosProviderProps = {
  children: ReactNode;
};

export const VotosContext = createContext<VotosContextProps>(null!);

export const VotosProvider = ({ children }: VotosProviderProps) => {
  const [state, dispatch] = useReducer(votosReducer, initialState);

  return (
    <VotosContext.Provider value={{ state, dispatch }}>
      {children}
    </VotosContext.Provider>
  );
};
