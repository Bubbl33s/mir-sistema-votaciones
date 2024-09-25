import { Candidato } from "../types";
import { candidatosData } from "../data/candidatos";

export type VotosActions =
  | {
      type: "agregar-voto";
      payload: { candidato: Candidato };
    }
  | {
      type: "toggle-porcentaje";
    }
  | {
      type: "check-all";
    }
  | {
      type: "check-candidato";
      payload: { candidatoId: Candidato["id"]; isChecked: boolean };
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

  if (action.type == "check-all") {
    const candidatos = state.candidatos.map((c) => ({ ...c, checked: true }));
    return { ...state, candidatos };
  }

  if (action.type == "check-candidato") {
    const candidatos = state.candidatos.map((c) =>
      c.id === action.payload.candidatoId
        ? { ...c, checked: action.payload.isChecked }
        : c
    );
    return { ...state, candidatos };
  }

  return state;
};
