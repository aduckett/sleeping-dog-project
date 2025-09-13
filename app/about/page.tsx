import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import { Droplets, ShieldCheck, Users } from "lucide-react";

function Feature({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="rounded-2xl border p-5 bg-white">
      <div className="flex items-center gap-3">
        <div className="rounded-xl border p-2"><Icon className="h-5 w-5" /></div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mt-2">{text}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Why Sleeping Dog Project?</h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            We install durable, drainable <em>Sleeping Dog Bowls</em> across Arizona so dogs and their people
            have safe water on every walk—while adding a joyful piece of public art to the park.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/donate">Donate & Sponsor</Button>
            <Button href="/locations" variant="outline">See Planned Locations</Button>
          </div>
        </div>
      </Section>

      {/* Three features */}
      <Section>
        <div className="grid md:grid-cols-3 gap-4">
          <Feature
            icon={Droplets}
            title="Safe Hydration"
            text="Drainable design discourages standing water and helps reduce water-borne pathogens."
          />
          <Feature
            icon={ShieldCheck}
            title="Built to Last"
            text="Heavy single-piece cement with smooth, pet-safe edges and anchored installation."
          />
          <Feature
            icon={Users}
            title="Community Art"
            text="A sleeping dog sculpture that sparks smiles and brings people together."
          />
        </div>
      </Section>

      {/* Health facts strip — short, scannable */}
      <Section className="bg-gray-50 border-y">
        <h2 className="text-2xl font-bold">Health & Safety Facts</h2>
        <ul className="mt-4 space-y-3 text-sm text-gray-700">
          <li>• Cars can heat ~20°F in 10 min, ~30°F in 20, and 40+°F in 60 — cracked windows don’t help.</li>
          <li>• Heatstroke warning signs: frantic panting, heavy drool, bright-red gums, wobbling.</li>
          <li>• Dehydration increases risk of heat-related illness and organ injury.</li>
          <li>• Dog parks: higher risk of leptospirosis; avoid standing water to limit Giardia exposure.</li>
        </ul>
        <p className="text-xs text-gray-500 mt-3">
          Sources: AVMA, CDC, AKC, Merck Veterinary/NCBI.
        </p>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-2xl border p-6 bg-white text-center">
          <h3 className="text-xl font-semibold">Arizona first. Nation next.</h3>
          <p className="text-gray-700 mt-2">Help place the first wave of bowls and keep tails wagging.</p>
          <div className="mt-4 flex justify-center gap-3">
            <Button href="https://www.gofundme.com/f/SleepingDog">Fund the First 10 Bowls</Button>
            <Button href="https://givebutter.com/sleepingdog" variant="outline">Sponsor or Give Monthly</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
