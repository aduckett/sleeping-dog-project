import Section from "../../components/ui/Section";

export default function LocationsPage(){
  return (
    <>
      <Section>
        <h1 className="text-3xl font-extrabold">Locations</h1>
        <p className="mt-3 text-gray-700">Map of installed & planned bowls.</p>
        <div className="mt-6 rounded-2xl border bg-white h-[480px] flex items-center justify-center">
          <span className="text-gray-500 text-sm">Embed your Google Map here</span>
        </div>
      </Section>
    </>
  );
}
