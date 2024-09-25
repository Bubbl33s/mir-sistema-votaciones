import { useVotos } from "../hooks/useVotos";

export default function TotalAbsoluto() {
  const { state } = useVotos();

  const totalVotos = state.candidatos.reduce((acc, c) => acc + c.votos, 0);

  return (
    <section className="border rounded-lg p-4">
      <p>Votos totales: {totalVotos}</p>
    </section>
  );
}
