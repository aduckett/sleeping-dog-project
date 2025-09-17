import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";

// New/Existing components we created earlier:
import ImpactStats from "../../components/ImpactStats";
import Transparency from "../../components/Transparency";
import OurTeam from "../../components/OurTeam";
import WhyDrainable from "../../components/WhyDrainable";
import FactsStrip from "../../components/FactsStrip";
import TimelineRoadmap from "../../components/TimelineRoadmap";
import DonorWall from "../../components/DonorWall";
import AsSeenIn from "../../components/AsSeenIn";

export default function AboutPage() {
  return (
    <>
      {/* 1) Hero / Intro */}
      <Section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Sleeping Dog Project</h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            We install durable, drainable <em>Sleeping Dog Bowls</em> in Arizona’s parks and trails so dogs and their
            people have safe water on every walk—while adding joyful public art to the community.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/donate">Donate &amp; Sponsor</Button>
            <Button href="/locations" variant="outline">See Planned Locations</Button>
          </div>
        </div>
      </Section>

      {/* 2) Impact stats */}
      <ImpactStats />

      {/* 3) Transparency (Where money goes) */}
      <Transparency />

      {/* 4) Real people / Team */}
      <OurTeam />

      {/* 5) Story: Why drainable bowls (with sources) */}
      <WhyDrainable />

      {/* 6) Health & Safety facts */}
      <FactsStrip />

      {/* 7) Roadmap */}
      <TimelineRoadmap />

      {/* 8) Donor Wall (placeholder for now) */}
      <DonorWall />

      {/* 9) Final CTA */}
      <Section>
        <div className="rounded-2xl border p-6 bg-white text-center">
          <h3 className="text-xl font-semibold">Arizona first. Nation next.</h3>
          <p className="text-gray-700 mt-2">Help place the first wave of bowls and keep tails wagging.</p>
          <div className="mt-4 flex justify-center gap-3">
            <Button href="https://www.gofundme.com/f/SleepingDog">Fund the First 10 Bowls</Button>
            <Button href="https://givebutter.com/sleepingdog" variant="outline">Sponsor or Give Monthly</Button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prefer details? Visit our <a className="underline" href="/faq">FAQ</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
