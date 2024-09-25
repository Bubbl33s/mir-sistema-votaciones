import { Switch, Checkbox } from "../components";
import { useVotos } from "../hooks/useVotos";

export default function Filtro() {
  const { dispatch } = useVotos();

  return (
    <aside className="border rounded-lg w-fit p-4">
      <h2>Filtrar</h2>
      <Switch
        text="Porcentajes"
        onChangeHandler={() => dispatch({ type: "toggle-porcentaje" })}
      />

      <ul className="w-48 text-sm font-medium border border-gray-200 rounded-lg">
        <li className="w-full border-b border-gray-200 rounded-t-lg">
          <Checkbox text="Todos" />
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg">
          <Checkbox text="Candidato 1" />
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg">
          <Checkbox text="Candidato 2" />
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg">
          <Checkbox text="Candidato 3" />
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg">
          <Checkbox text="Candidato 4" />
        </li>
      </ul>
    </aside>
  );
}
