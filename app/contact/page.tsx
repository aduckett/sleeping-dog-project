import Section from "../../components/ui/Section";
import ContactForm from "../../components/ContactForm";

export default function ContactPage(){
  return (
    <>
      <Section id="contact">
        <h1 className="text-3xl font-extrabold">Contact</h1>
        <p className="mt-3 text-gray-700">
          Have a park in mind or want to <a href="#sponsor" className="underline">sponsor a bowl</a>? Send a note.
        </p>
        <ContactForm />
      </Section>

      <Section id="sponsor" className="bg-gray-50 border-y">
        <h2 className="text-2xl font-bold">Sponsor Inquiry</h2>
        <p className="text-gray-700 mt-2">
          Tell us your preferred tier, location ideas, and any questions. We’ll reply with next steps and timelines.
        </p>
        <ContactForm />
      </Section>
    </>
  );
}
