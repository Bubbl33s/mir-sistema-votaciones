import { Candidato } from "../types";
import { candidatosData } from "../data/candidatos";

export type VotosActions =
  | {
      type: "agregar-voto";
      payload: { candidato: Candidato };
    }
  | {
      type: "toggle-porcentaje";
    };

export type VotosState = {
  candidatos: Candidato[];
  verPorcentaje: boolean;
};

export const initialState: VotosState = {
  candidatos: candidatosData,
  verPorcentaje: false,
};

export const votosReducer = (state: VotosState, action: VotosActions) => {
  if (action.type == "agregar-voto") {
    const candidato = action.payload.candidato;
    const candidatos = state.candidatos.map((c) =>
      c.id === candidato.id ? { ...c, votos: c.votos + 1 } : c
    );
    return { ...state, candidatos };
  }

  if (action.type == "toggle-porcentaje") {
    return { ...state, verPorcentaje: !state.verPorcentaje };
  }

  return state;
};
