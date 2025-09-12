export default function SponsorTierCard({ title, blurb, price }: { title: string; blurb: string; price: string }) {
return (
<div className="rounded-2xl border p-6 bg-white shadow-sm">
<h3 className="font-semibold">{title}</h3>
<p className="text-sm text-gray-600">{blurb}</p>
<p className="mt-4 text-3xl font-extrabold">{price}</p>
<a href="/contact" className="mt-6 inline-flex rounded-xl border px-4 py-2 text-sm font-medium">Inquire</a>
</div>
);
}