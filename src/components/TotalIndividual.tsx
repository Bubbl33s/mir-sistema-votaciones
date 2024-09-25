import { useVotos } from "../hooks/useVotos";

export default function TotalIndividual() {
  const { state } = useVotos();

  const totalVotos = state.candidatos.reduce((acc, c) => acc + c.votos, 0);

  return (
    <section className="overflow-x-auto shadow-md sm:rounded-lg w-full mx-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-indigo-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Candidato
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              {state.verPorcentaje ? "Porcentaje" : "# Votos"}
            </th>
          </tr>
        </thead>
        <tbody>
          {state.candidatos.map(
            (c) =>
              c.checked && (
                <tr key={c.id} className="bg-white border-b text-gray-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {c.nombre}
                  </th>
                  <td className="px-6 py-4 text-center">
                    {state.verPorcentaje
                      ? `${((c.votos * 100) / totalVotos).toFixed(2)}%`
                      : c.votos}
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </section>
  );
}
