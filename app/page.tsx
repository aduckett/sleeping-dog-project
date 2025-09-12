"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CTAButtons from "../components/CTAButtons";


export default function Page() {
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1">
<Hero />
{/* Quick intro */}
<section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-8">
<div className="md:col-span-2">
<h2 className="text-2xl font-bold">Why this project exists</h2>
<p className="mt-4 text-gray-700">
Arizona heat is no joke—for people or their pups. Many public spaces lack safe, dependable
water access for dogs. Sleeping Dog Project solves this with beautiful, durable hydration
stations designed as a single cement sculpture: a sleeping dog base with a large bowl on top
and built-in drainage.
</p>
<ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
<li className="flex items-start gap-3"><span>💧</span><span>Safe, drainable bowl to prevent standing water</span></li>
<li className="flex items-start gap-3"><span>🪨</span><span>Solid cement construction for durability</span></li>
<li className="flex items-start gap-3"><span>🎨</span><span>Public art that sparks joy and community pride</span></li>
<li className="flex items-start gap-3"><span>🌎</span><span>Arizona first—with national expansion plans</span></li>
</ul>
<div className="mt-6"><CTAButtons /></div>
</div>
<div className="rounded-2xl border p-5 bg-white">
<h3 className="font-semibold">Project snapshot</h3>
<dl className="mt-3 space-y-2 text-sm text-gray-700">
<div className="flex justify-between"><dt>Phase</dt><dd>Arizona Launch</dd></div>
<div className="flex justify-between"><dt>Goal</dt><dd>First 25 bowls</dd></div>
<div className="flex justify-between"><dt>Use of funds</dt><dd>Materials, install, maintenance</dd></div>
<div className="flex justify-between"><dt>Nonprofit-friendly</dt><dd>Yes (donations + sponsors)</dd></div>
</dl>
</div>
</section>
</main>
<Footer />
</div>
);
}