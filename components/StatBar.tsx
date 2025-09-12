import Container from "./ui/Container";
export default function StatBar() {
  const stats = [
    { k: "25", label: "Target bowls" },
    { k: "7", label: "Parks interested" },
    { k: "3", label: "Prototype sites" },
  ];
  return (
    <div className="bg-gray-50 border-y">
      <Container className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl font-extrabold">{s.k}</div>
            <div className="text-sm text-gray-600">{s.label}</div>
          </div>
        ))}
      </Container>
    </div>
  );
}
