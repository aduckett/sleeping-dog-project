import Section from "../../components/ui/Section";
import MapEmbed from "../../components/MapEmbed";
import { LOCATIONS } from "../../data/locations";

export default function LocationsPage(){
  return (
    <>
      <Section>
        <h1 className="text-3xl font-extrabold">Locations</h1>
        <p className="mt-3 text-gray-700">Map of installed & planned bowls.</p>
        <div className="mt-6 rounded-2xl border bg-white h-[480px] overflow-hidden">
          <MapEmbed />
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="rounded-2xl border p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{loc.name}</h3>
                <span className={`text-xs rounded-full px-2 py-1 ${
                  loc.status === "Installed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-800"
                }`}>
                  {loc.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{loc.city}</p>
              {loc.notes && <p className="text-sm text-gray-500 mt-1">{loc.notes}</p>}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
