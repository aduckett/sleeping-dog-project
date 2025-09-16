import { AlertTriangle, Droplets, ShieldCheck, ThermometerSun, PawPrint } from "lucide-react";

export default function FactsStrip() {
  return (
    <section className="bg-gray-50 border-y">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold">Health & Safety Facts</h2>
        <ul className="mt-5 space-y-4 text-sm text-gray-700">
          <li className="flex gap-3">
            <ThermometerSun className="h-5 w-5 mt-0.5" aria-hidden />
            <span>
              <strong>Heatstroke is fast &amp; dangerous.</strong> Warning signs include frantic panting,
              heavy drool, bright-red gums, and labored breathing—seek urgent care.{" "}
              <span className="text-gray-500">[AKC, AVMA]</span>
            </span>
          </li>
          <li className="flex gap-3">
            <Droplets className="h-5 w-5 mt-0.5" aria-hidden />
            <span>
              <strong>Dehydration magnifies heat injury.</strong> Early heat illness is tied to dehydration
              and electrolyte imbalance; fast access to water helps.{" "}
              <span className="text-gray-500">[PetMD]</span>
            </span>
          </li>
          <li className="flex gap-3">
            <ShieldCheck className="h-5 w-5 mt-0.5" aria-hidden />
            <span>
              <strong>Dog-park pathogen risk exists.</strong> Leptospirosis risk rises with contact at
              parks/boarding; vaccines are available (initial 2-dose series + annual boosters).{" "}
              <span className="text-gray-500">[CDC, ACVIM]</span>
            </span>
          </li>
          <li className="flex gap-3">
            <AlertTriangle className="h-5 w-5 mt-0.5" aria-hidden />
            <span>
              <strong>Standing water ⇒ Giardia risk.</strong> Avoid ponds/creeks; drain bowls to limit
              exposure. <span className="text-gray-500">[CDC, CAPC]</span>
            </span>
          </li>
          <li className="flex gap-3">
            <PawPrint className="h-5 w-5 mt-0.5" aria-hidden />
            <span>
              <strong>Drainable bowls = safer hydration.</strong> Cement bowls that drain discourage bacteria
              and parasites while keeping water fresh for every pup.{" "}
              <span className="text-gray-500">[Sleeping Dog Project]</span>
            </span>
          </li>
        </ul>
        <p className="text-xs text-gray-500 mt-4">
          Sources: AKC; AVMA; PetMD; CDC (Leptospirosis &amp; Giardia); ACVIM; CAPC; Sleeping Dog Project.
        </p>
      </div>
    </section>
  );
}
