import Section from "../../components/ui/Section";

export default function TheBowlPage(){
  return (
    <>
      <Section>
        <h1 className="text-3xl font-extrabold">The Bowl</h1>
        <p className="text-gray-700 mt-3 max-w-3xl">A single-piece cement sculpture with a sleeping dog base and a large, drainable bowl. Designed for safety, durability, and joy.</p>
        <ul className="mt-6 list-disc ml-6 text-gray-700">
          <li>Anti-tip weight & anchored installation</li>
          <li>Drainage channel prevents standing water</li>
          <li>Smooth edges and pet-safe finishes</li>
          <li>Optional sponsor logo embedded inside the bowl</li>
        </ul>
        <div className="mt-8 rounded-2xl border bg-gray-50 h-80 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Photo / 3D render placeholder</span>
        </div>
      </Section>
    </>
  );
}
