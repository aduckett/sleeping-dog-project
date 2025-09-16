import { ArrowRight, MapPin, Rocket, Sparkles } from "lucide-react";

export default function TimelineRoadmap() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold">Roadmap</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border p-5 bg-white">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border p-2"><MapPin className="h-5 w-5" aria-hidden /></div>
              <h3 className="font-semibold">Phase 1: Arizona</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Install the first 10–40 bowls across dog parks and trailheads in Phoenix Metro and Tempe/Scottsdale.
            </p>
          </div>

          <div className="rounded-2xl border p-5 bg-white">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border p-2"><ArrowRight className="h-5 w-5" aria-hidden /></div>
              <h3 className="font-semibold">Phase 2: Southwest</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Expand to Tucson, Flagstaff, and regional partners; add maintenance playbook & sponsor pipeline.
            </p>
          </div>

          <div className="rounded-2xl border p-5 bg-white">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border p-2"><Rocket className="h-5 w-5" aria-hidden /></div>
              <h3 className="font-semibold">Phase 3: Nationwide</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Replicate with city partners and corporate sponsors; publish open installation specs and safety guidelines.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border p-5 bg-white flex items-center justify-between gap-3">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Want to help accelerate the roadmap?</span> Sponsors and monthly donors fuel installs and upkeep.
          </p>
          <a
            href="/sponsor"
            className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold hover:shadow"
          >
            <Sparkles className="h-4 w-4" aria-hidden /> View Sponsorships
          </a>
        </div>
      </div>
    </section>
  );
}
