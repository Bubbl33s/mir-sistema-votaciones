type CandidatoProps = {
  name: string;
  img?: string;
};

export default function Candidato({ name, img }: CandidatoProps) {
  return (
    <div className="flex flex-col items-center max-w-40">
      <div className="relative mb-3">
        <img
          src={img ? img : "/default-profile.webp"}
          alt={img ? name : "No hay imagen del candidato"}
        />
        <button className="bg-indigo-300 text-4xl px-2 absolute bottom-0 right-0 hover:bg-indigo-400 hover:text-white">
          +
        </button>
      </div>

      <p className="text-center h-12">{name}</p>
    </div>
  );
}
