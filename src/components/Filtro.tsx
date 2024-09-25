import { Switch, Checkbox } from "../components";
import { useVotos } from "../hooks/useVotos";

export default function Filtro() {
  const { state, dispatch } = useVotos();

  const handleAllChkChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const isChecked = e.target.checked;

    if (isChecked) {
      dispatch({ type: "check-all" });
      e.target.disabled = true;
    }
  };

  const handleCandidatoChkChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const isChecked = e.target.checked;
    const candidatoId = e.target.id.split("-")[2];

    // Ensure at least one candidate is checked
    if (!isChecked && state.candidatos.filter((c) => c.checked).length === 1) {
      return;
    }

    dispatch({ type: "check-candidato", payload: { candidatoId, isChecked } });
  };

  return (
    <aside className="border rounded-lg w-fit p-4 space-y-2">
      <h2>Filtrar</h2>
      <Switch
        text="Porcentajes"
        onChangeHandler={() => dispatch({ type: "toggle-porcentaje" })}
      />

      <ul className="w-fit text-sm font-medium border border-gray-200 rounded-lg">
        <li className="w-full border-b border-gray-200 rounded-t-lg">
          <Checkbox
            text="Todos"
            id="chk-todos"
            name="todos"
            checked={state.candidatos.every((c) => c.checked)}
            disabled={state.candidatos.every((c) => c.checked)}
            onChangeHandler={handleAllChkChange}
          />
        </li>

        {state.candidatos.map((c) => (
          <li
            key={c.id}
            className="w-full border-b border-gray-200 rounded-t-lg last-of-type:border-b-0"
          >
            <Checkbox
              text={c.nombre}
              id={`chk-candidato-${c.id}`}
              name={`candidato-${c.id}`}
              checked={c.checked}
              disabled={
                state.candidatos.filter((c) => c.checked).length === 1 &&
                c.checked
              }
              onChangeHandler={handleCandidatoChkChange}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}
