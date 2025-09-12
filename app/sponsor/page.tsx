import Section from "../../components/ui/Section";
import TierCard from "../../components/TierCard";


export default function SponsorPage(){
return (
<>
<Section>
<h1 className="text-3xl font-extrabold">Sponsor a Bowl</h1>
<p className="mt-3 text-gray-700 max-w-3xl">Businesses and community partners can fund bowls that include a tasteful sponsor logo inside the basin. It’s community impact <span className="italic">and</span> memorable brand visibility.</p>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<TierCard title="Community Partner" blurb="Website + social thank you" price="$500" />
<TierCard title="Bowl Sponsor" blurb="Logo embedded inside bowl" price="$1,500" />
<TierCard title="Founding Sponsor" blurb="Multiple bowls + featured partner" price="$5,000" />
</div>
</Section>
</>
);
}