import { AlertTriangle, Droplets, ShieldCheck, ThermometerSun } from "lucide-react";

export default function FactsStrip() {
  return (
    <section className="bg-gray-50 border-y">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold">Health & Safety Facts</h2>
        <ul className="mt-5 space-y-4 text-sm text-gray-700">
          <li className="flex gap-3">
            <ThermometerSun className="h-5 w-5 mt-0.5" />
            <span>
              <strong>Heatstroke is fast &amp; dangerous.</strong> Warning signs include frantic panting,
              heavy drool, bright-red gums, and labored breathing—seek urgent care. <span className="text-gray-500">[AKC, AVMA]</span>
            </span>
          </li>
          <li className="flex gap-3">
            <Droplets className="h-5 w-5 mt-0.5" />
            <span>
              <strong>Dehydration magnifies heat injury.</strong> Early heat illness is tied to dehydration/electrolyte imbalance;
              fast access to water helps. <span className="text-gray-500">[PetMD]</span>
            </span>
          </li>
          <li className="flex gap-3">
            <ShieldCheck className="h-5 w-5 mt-0.5" />
            <span>
              <strong>Dog-park pathogen risk exists.</strong> Leptospirosis risk rises with contact at parks/boarding; vaccines are available (initial 2-dose series + annual boosters). <span className="text-gray-500">[CDC, MMWR/CDC, ACVIM]</span>
            </span>
          </li>
          <li className="flex gap-3">
            <AlertTriangle className="h-5 w-5 mt-0.5" />
            <span>
              <strong>Standing water ⇒ Giardia risk.</strong> Avoid ponds/creeks; drain bowls to limit exposure. <span className="text-gray-500">[CDC, CAPC]</span>
            </span>
          </li>
          <li className="flex gap-3">
            <ThermometerSun className="h-5 w-5 mt-0.5" />
            <span>
              <strong>Hot cars heat rapidly.</strong> Interiors can soar far above outside temps within minutes; cracked windows don’t help. <span className="text-gray-500">[NOAA/NWS]</span>
            </span>
          </li>
        </ul>
        <p className="text-xs text-gray-500 mt-4">
          Sources: AKC; AVMA; PetMD; CDC (Leptospirosis &amp; Giardia); CDC MMWR; ACVIM; NOAA/NWS.
        </p>
      </div>
    </section>
  );
}
