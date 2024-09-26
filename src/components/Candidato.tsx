import { useVotos } from "../hooks/useVotos";
import type { Candidato } from "../types";

type CandidatoProps = {
  candidato: Candidato;
};

export default function Candidato({ candidato }: CandidatoProps) {
  const { dispatch } = useVotos();

  return (
    <div className="flex flex-col items-center max-w-40">
      <div className="relative mb-3 w-40 h-40 overflow-hidden rounded-md">
        <img
          className="w-full"
          src={candidato.imagen ? candidato.imagen : "/default-profile.webp"}
          alt={
            candidato.imagen ? candidato.nombre : "No hay imagen del candidato"
          }
        />
        <button
          className="bg-indigo-300 text-4xl px-2 absolute bottom-0 right-0 hover:bg-indigo-400 hover:text-white rounded-md flex justify-center items-center"
          onClick={() =>
            dispatch({ type: "agregar-voto", payload: { candidato } })
          }
        >
          +
        </button>
      </div>

      <p className="text-center h-12 w-5/6">{candidato.nombre}</p>
    </div>
  );
}
