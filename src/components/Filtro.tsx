import { Switch, Checkbox } from "../components";

export default function Filtro() {
  return (
    <div className="border rounded-lg">
      <h2>Filtrar</h2>
      <Switch text="Porcentajes" />

      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Technology
      </h3>

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
    </div>
  );
}
