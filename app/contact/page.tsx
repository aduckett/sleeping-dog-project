import Section from "../../components/ui/Section";
import ContactForm from "../../components/ContactForm";


export default function ContactPage(){
return (
<>
<Section>
<h1 className="text-3xl font-extrabold">Contact</h1>
<p className="mt-3 text-gray-700">Have a park in mind or want to sponsor a bowl? Send a note.</p>
<ContactForm />
</Section>
</>
);
}