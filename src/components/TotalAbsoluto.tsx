import { useVotos } from "../hooks/useVotos";

export default function TotalAbsoluto() {
  const { state } = useVotos();

  const totalVotos = state.candidatos.reduce((acc, c) => acc + c.votos, 0);

  return (
    <section className="border rounded-lg flex items-center justify-center h-16">
      <p className="text-2xl">Votos totales: {totalVotos}</p>
    </section>
  );
}
