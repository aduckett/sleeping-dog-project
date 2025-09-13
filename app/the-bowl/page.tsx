import Section from "../../components/ui/Section";
import Image from "next/image";
import { Droplet, Shield, Wrench } from "lucide-react";
import Button from "../../components/ui/Button";

function Spec({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="rounded-2xl border p-4 bg-white">
      <div className="flex items-center gap-2">
        <div className="rounded-lg border p-2"><Icon className="h-5 w-5" /></div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mt-2">{text}</p>
    </div>
  );
}

export default function TheBowlPage(){
  return (
    <>
      {/* Visual hero */}
      <Section className="border-b">
        <h1 className="text-3xl font-extrabold">Meet the Bowl</h1>
        <p className="text-gray-700 mt-3 max-w-3xl">
          A single-piece cement sculpture with a sleeping dog base and a large, drainable basin.
          Designed for safety, durability, and joy.
        </p>
        <div className="mt-6 relative rounded-2xl border bg-gray-50 h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dizmpjrdk/image/upload/v1757791778/Heading_zszhnn.svg"
            alt="Sleeping Dog Project cement bowl render"
            fill
            sizes="(min-width: 1024px) 800px, (min-width: 768px) 700px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </Section>

      {/* Exploded features */}
      <Section>
        <div className="grid md:grid-cols-3 gap-4">
          <Spec icon={Shield} title="Heavy & Stable" text="~200+ lb single-piece cement, anchored for safety; smooth, pet-safe edges." />
          <Spec icon={Droplet} title="Drainable Basin" text="Discourages standing water and helps reduce exposure to water-borne pathogens." />
          <Spec icon={Wrench} title="Built for Parks" text="Vandal-resistant materials and finishes for long service life." />
        </div>
      </Section>

      {/* Health callouts */}
      <Section className="bg-gray-50 border-y">
        <h2 className="text-2xl font-bold">Why draining matters</h2>
        <ul className="mt-4 space-y-3 text-sm text-gray-700">
          <li>• Dehydration raises heat-injury risk; fast access to water helps mitigate it.</li>
          <li>• Avoiding standing water helps limit Giardia and leptospirosis exposure at busy parks.</li>
          <li>• Clear sightlines and a large basin make it easy to rinse and refill quickly.</li>
        </ul>
        <p className="text-xs text-gray-500 mt-3">Sources: CDC (Giardia & Leptospirosis), NCBI/Merck (dehydration & heat injury).</p>
      </Section>

      {/* Sponsor CTA */}
      <Section>
        <div className="rounded-2xl border p-6 bg-white text-center">
          <h3 className="text-xl font-semibold">Put your logo inside the bowl</h3>
          <p className="text-gray-700 mt-2">Sponsor a bowl and your name or logo is revealed every time water is poured.</p>
          <div className="mt-4 flex justify-center gap-3">
            <Button href="/sponsor" variant="outline">Sponsorship Options</Button>
            <Button href="/contact#sponsor">Ask a Question</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
