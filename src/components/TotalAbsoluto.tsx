type TotalProps = {
  cantidad: number;
};

export default function TotalAbsoluto({ cantidad }: TotalProps) {
  return (
    <section className="border rounded-lg p-4">
      <p>Votos totales: {cantidad}</p>
    </section>
  );
}
