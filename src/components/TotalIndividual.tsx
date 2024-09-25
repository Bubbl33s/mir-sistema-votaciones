import { useVotos } from "../hooks/useVotos";

export default function TotalIndividual() {
  const { state } = useVotos();

  return (
    <section className="border rounded-lg p-4">
      {state.candidatos.map((c) => (
        <p key={c.id}>
          {c.nombre}: {c.votos}
        </p>
      ))}
    </section>
  );
}
