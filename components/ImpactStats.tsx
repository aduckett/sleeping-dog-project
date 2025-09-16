import { Droplets, MapPinned, PawPrint } from "lucide-react";

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: any;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 flex items-center gap-4">
      <div className="rounded-xl border p-2">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <div>
        <div className="text-2xl font-extrabold leading-none">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
}

export default function ImpactStats() {
  return (
    <section className="bg-gray-50 border-y">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold">Our Impact at a Glance</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Stat icon={MapPinned} value="30+" label="Planned Arizona locations" />
          <Stat icon={Droplets} value="40 bowls/yr" label="Target capacity with funding" />
          <Stat icon={PawPrint} value="10,000+" label="Dog walks served (est.)" />
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Estimates based on current planning and average park usage; updated as bowls are installed.
        </p>
      </div>
    </section>
  );
}
