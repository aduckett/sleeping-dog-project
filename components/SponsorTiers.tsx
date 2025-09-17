import { BadgeCheck, Droplet, Medal } from "lucide-react";
import Button from "./ui/Button";

type Tier = {
  name: string;
  price: string;
  features: string[];
  cta: { label: string; href: string; variant?: "solid" | "outline" };
  highlight?: boolean;
  badge?: string;
};

const TIERS: Tier[] = [
  {
    name: "Community Partner",
    price: "$100",
    features: [
      "Website & social thank-you",
      "Project updates with install photos",
      "Listed on Donor Wall",
    ],
    cta: { label: "Inquire", href: "/contact#sponsor", variant: "outline" },
    badge: "Great for local businesses",
  },
  {
    name: "Bowl Sponsor",
    price: "$500",
    features: [
      "Logo/name embedded inside bowl",
      "Website & social recognition",
      "Install announcement shout-out",
    ],
    cta: { label: "Sponsor a Bowl", href: "https://givebutter.com/sleepingdog" },
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Founding Sponsor",
    price: "$1,500",
    features: [
      "Multiple bowls funded",
      "Featured partner placement",
      "Priority selection for locations",
    ],
    cta: { label: "Talk to Us", href: "/contact#sponsor", variant: "outline" },
    badge: "High impact",
  },
];

export default function SponsorTiers() {
  return (
    <section className="bg-gray-50 border-y">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold">Sponsorship Options</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-6 bg-white transition hover:shadow-md active:shadow-sm ${
              t.highlight ? "ring-2 ring-black" : ""
                 }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                {t.badge && (
                  <span className="text-[11px] rounded-full bg-gray-100 px-2 py-1">
                    {t.badge}
                  </span>
                )}
              </div>

              <div className="mt-2 text-3xl font-extrabold">{t.price}</div>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <BadgeCheck className="h-4 w-4 mt-0.5" aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button
                  href={t.cta.href}
                  variant={t.cta.variant === "outline" ? "outline" : "solid"}
                  className="w-full"
                >
                  {t.cta.label}
                </Button>
              </div>

              {t.name === "Bowl Sponsor" && (
                <p className="mt-3 text-xs text-gray-500">
                  Logo/name appears inside the basin—revealed each time water is poured.
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border p-5 bg-white flex items-center gap-3">
          <Droplet className="h-5 w-5" aria-hidden />
          <p className="text-sm text-gray-700">
            Not sure which to choose? <a href="/contact#sponsor" className="underline">Ask us</a> and we’ll match a tier to your goals & budget.
          </p>
        </div>
      </div>
    </section>
  );
}
