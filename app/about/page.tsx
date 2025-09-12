import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export default function AboutPage() {
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1">
<section className="mx-auto max-w-5xl px-4 py-16 space-y-6">
<h1 className="text-3xl font-extrabold">About the Sleeping Dog Project</h1>
<p className="text-gray-700">
We install durable, cement Sleeping Dog Bowls across Arizona parks and trails—safe hydration
stations that double as public art. The form is a sleeping dog base with a large bowl on top,
engineered with drainage to prevent standing water.
</p>
<p className="text-gray-700">
Our vision: Arizona first, then expand nationwide with local partners and sponsors.
</p>
</section>
</main>
<Footer />
</div>
);
}