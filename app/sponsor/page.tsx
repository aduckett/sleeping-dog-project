import Section from "../../components/ui/Section";
import TierCard from "../../components/TierCard";
import Button from "../../components/ui/Button";
import SponsorTiers from "../../components/SponsorTiers";

export default function SponsorPage(){
  return (
    <>
      <Section>
        <h1 className="text-3xl font-extrabold">Sponsor a Bowl</h1>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Fund bowls that include a tasteful sponsor logo inside the basin. It’s community impact <span className="italic">and</span> memorable brand visibility.
        </p>
      </Section>

      <SponsorTiers />

      <Section className="bg-gray-50 border-y">
        <h2 className="text-2xl font-bold">How it works</h2>
        <ol className="mt-4 space-y-2 text-sm text-gray-700 list-decimal ml-5">
          <li>Choose a tier & submit an inquiry</li>
          <li>Approve location & artwork</li>
          <li>Installation day + photos & recognition</li>
        </ol>
      </Section>
    </>
  );
}