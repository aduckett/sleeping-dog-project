import { Factory, Truck, Wrench, Megaphone, Droplet } from "lucide-react";

function LineItem({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-6 w-6 mt-1 text-gray-600" aria-hidden />
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}

export default function Transparency() {
  return (
    <section className="bg-gray-50 border-y">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold">Where Your Money Goes</h2>
        <p className="mt-3 text-gray-700">
          Each bowl is a community effort, created and installed by local Arizona families and partners.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <LineItem
            icon={Factory}
            title="Manufacturing (Modern Industry)"
            text="Local vendor designs and fabricates the mold for safe, durable bowls."
          />
          <LineItem
            icon={Droplet}
            title="3D Printing (Fruth Group)"
            text="3D printing services ensure precise prototypes and design models."
          />
          <LineItem
            icon={Megaphone}
            title="Marketing (Too Hot To Walk)"
            text="Community outreach, awareness campaigns, and donor recognition."
          />
          <LineItem
            icon={Truck}
            title="Transportation (Too Hot To Walk)"
            text="Moving molds and finished bowls to parks and trails."
          />
          <LineItem
            icon={Wrench}
            title="Installation & Maintenance (Xcess Custom + Too Hot To Walk)"
            text="Anchoring bowls in cement, ensuring safety, and providing upkeep."
          />
        </div>
      </div>
    </section>
  );
}
