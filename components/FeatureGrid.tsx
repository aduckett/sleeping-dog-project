import { Card } from "./ui/Card";

export default function FeatureGrid() {
  const items = [
    { icon: "💧", title: "Drainable", text: "Prevents standing water and keeps bowls fresh." },
    { icon: "🪨", title: "Durable cement", text: "Single-piece build, anchored for safety." },
    { icon: "🎨", title: "Public art", text: "Friendly design that sparks smiles and photos." },
    { icon: "🏷️", title: "Sponsor logo inside", text: "Brand appears as water is poured." },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((it) => (
        <Card key={it.title} className="p-6">
          <div className="text-3xl">{it.icon}</div>
          <h3 className="mt-3 font-semibold">{it.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{it.text}</p>
        </Card>
      ))}
    </div>
  );
}
