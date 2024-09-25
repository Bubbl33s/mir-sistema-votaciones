import {
  Candidato,
  Filtro,
  TotalAbsoluto,
  TotalIndividual,
} from "./components";

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <main className="w-9/12 max-w-6xl p-6 border rounded-lg flex flex-col gap-10">
          <section className="flex justify-center gap-8">
            <Candidato name="Candidato 1 apellido otro apellido" />
            <Candidato name="Candidato 2" />
            <Candidato name="Candidato 3" />
            <Candidato name="Candidato 4" />
          </section>

          <div className="flex gap-5">
            <Filtro />
            <div className="flex-grow flex flex-col gap-5">
              <TotalAbsoluto cantidad={100} />
              <TotalIndividual />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
