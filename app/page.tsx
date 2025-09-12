import Hero from "../components/Hero";
import Section from "../components/ui/Section";
import FeatureGrid from "../components/FeatureGrid";
import StatBar from "../components/StatBar";
import Button from "../components/ui/Button";


export default function Page(){
return (
<>
<Hero />
<StatBar />
<Section>
<h2 className="text-2xl font-bold">What makes the Sleeping Dog Bowl special?</h2>
<p className="text-gray-700 mt-3 max-w-3xl">A durable, single‑piece cement sculpture with drainage, safe edges, and an optional sponsor logo inside the basin. Built for Arizona’s climate and high‑traffic spots.</p>
<div className="mt-8"><FeatureGrid /></div>
<div className="mt-8 flex gap-3">
<Button href="/donate">Donate</Button>
<Button href="/sponsor" variant="outline">Sponsor a Bowl</Button>
</div>
</Section>
</>
);
}