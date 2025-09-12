import Section from "../../components/ui/Section";
import FAQ from "../../components/FAQ";


export default function AboutPage(){
return (
<>
<Section>
<h1 className="text-3xl font-extrabold">About the Sleeping Dog Project</h1>
<div className="prose mt-4">
<p>We install durable, cement Sleeping Dog Bowls across Arizona parks and trails—safe hydration stations that double as public art. The form is a sleeping dog base with a large bowl on top, engineered with drainage to prevent standing water.</p>
<p>Our vision: Arizona first, then expand nationwide with local partners and sponsors.</p>
</div>
</Section>
<Section className="bg-gray-50 border-y">
<h2 className="text-2xl font-bold">FAQs</h2>
<div className="mt-6"><FAQ /></div>
</Section>
</>
);
}