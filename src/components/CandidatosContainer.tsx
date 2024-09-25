import Candidato from "./Candidato";
import { useVotos } from "../hooks/useVotos";

export default function CandidatosContainer() {
  const { state } = useVotos();

  return (
    <section className="flex justify-center gap-8">
      {state.candidatos.map((c) => (
        <Candidato key={c.id} name={c.nombre} />
      ))}
    </section>
  );
}
