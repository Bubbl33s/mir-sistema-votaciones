import { useVotos } from "../hooks/useVotos";

export default function TotalIndividual() {
  const { state } = useVotos();

  const totalVotos = state.candidatos.reduce((acc, c) => acc + c.votos, 0);

  return (
    <section className="border rounded-lg p-4">
      {state.candidatos.map((c) =>
        state.verPorcentaje ? (
          <p key={c.id}>
            {c.nombre}: {((c.votos * 100) / totalVotos).toFixed(2)}%
          </p>
        ) : (
          <p key={c.id}>
            {c.nombre}: {c.votos}
          </p>
        )
      )}
    </section>
  );
}
