import Section from "../../components/ui/Section";
import Image from "next/image";

export default function TheBowlPage(){
  return (
    <>
      <Section>
        <h1 className="text-3xl font-extrabold">The Bowl</h1>
        <p className="text-gray-700 mt-3 max-w-3xl">
          A single-piece cement sculpture with a sleeping dog base and a large, drainable bowl.
          Designed for safety, durability, and joy.
        </p>

        <ul className="mt-6 list-disc ml-6 text-gray-700">
          <li>Anti-tip weight & anchored installation</li>
          <li>Drainage channel prevents standing water</li>
          <li>Smooth edges and pet-safe finishes</li>
          <li>Optional sponsor logo embedded inside the bowl</li>
        </ul>

        <div className="mt-8 relative rounded-2xl border bg-gray-50 h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dizmpjrdk/image/upload/v1757790744/Heading_zszhnn.svg"
            alt="Sleeping Dog Project cement bowl render"
            fill
            sizes="(min-width: 1024px) 800px, (min-width: 768px) 700px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </Section>
    </>
  );
}
