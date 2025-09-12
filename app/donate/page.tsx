import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";

export default function DonatePage(){
  return (
    <>
      <Section>
        <h1 className="text-3xl font-extrabold">Donate</h1>
        <p className="text-gray-700 mt-3">Help fund materials, installation, and maintenance for new bowls across Arizona.</p>
        <div className="mt-6 flex gap-3">
          <Button href="#">GoFundMe</Button>
          <Button href="#" variant="outline">Givebutter</Button>
        </div>
        <p className="mt-3 text-xs text-gray-500">We’ll add live links and a donor wall once your campaigns are set up.</p>
      </Section>
    </>
  );
}
