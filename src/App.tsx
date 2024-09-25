import { Candidato, Filtro } from "./components";

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <main className="w-9/12 max-w-6xl p-6 border rounded-lg">
          <section className="flex justify-center gap-8">
            <Candidato name="Candidato 1 apellido otro apellido" />
            <Candidato name="Candidato 2" />
            <Candidato name="Candidato 3" />
            <Candidato name="Candidato 4" />
          </section>

          <aside>
            <Filtro />
          </aside>
        </main>
      </div>
    </>
  );
}

export default App;
