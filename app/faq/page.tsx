import Section from "../../components/ui/Section";

const FAQS = [
  {
    q: "How are bowls installed?",
    a: "Bowls are poured and anchored in place with cement by our partners at Xcess Custom and Too Hot To Walk to ensure long-term safety.",
  },
  {
    q: "Can I sponsor a specific park?",
    a: "Yes! You can request a park or trail during sponsorship, subject to approval by city/park authorities.",
  },
  {
    q: "Are donations tax-deductible?",
    a: "Currently donations are not tax-deductible, but we’re exploring nonprofit (501c3) status.",
  },
  {
    q: "Who maintains the bowls?",
    a: "Xcess Custom and Too Hot To Walk provide maintenance and inspections to ensure clean, safe use.",
  },
  {
    q: "How do drainable bowls help?",
    a: "They prevent stagnant water, reducing risk of parasites and disease spread at communal water sources.",
  },
];

export default function FAQPage() {
  return (
    <Section>
      <h1 className="text-3xl font-extrabold">Frequently Asked Questions</h1>
      <div className="mt-6 space-y-6">
        {FAQS.map((f, i) => (
          <div key={i}>
            <h3 className="font-semibold">{f.q}</h3>
            <p className="text-gray-700 mt-1">{f.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
