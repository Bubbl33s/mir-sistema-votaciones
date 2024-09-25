import {
  CandidatosContainer,
  Filtro,
  TotalAbsoluto,
  TotalIndividual,
} from "./components";

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <main className="min-w-5xl p-8 border rounded-lg flex flex-col gap-10">
          <CandidatosContainer />

          <div className="flex gap-5">
            <Filtro />
            <div className="flex-grow flex flex-col gap-5">
              <TotalAbsoluto />
              <TotalIndividual />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
