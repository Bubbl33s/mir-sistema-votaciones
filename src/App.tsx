import { Candidato } from "./components";

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <main className="w-9/12 p-6 border rounded-lg">
          <section className="flex">
            <Candidato name="Candidato 1 apellido otro apellido" />
            <Candidato name="Candidato 2" />
            <Candidato name="Candidato 3" />
            <Candidato name="Candidato 4" />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
