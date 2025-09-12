import { Card } from "./ui/Card";
import Button from "./ui/Button";


export default function TierCard({ title, blurb, price }:{ title:string; blurb:string; price:string }){
return (
<Card className="p-6">
<h3 className="font-semibold">{title}</h3>
<p className="text-sm text-gray-600">{blurb}</p>
<p className="mt-4 text-3xl font-extrabold">{price}</p>
<Button href="/contact" className="mt-6" variant="outline">Inquire</Button>
</Card>
);
}