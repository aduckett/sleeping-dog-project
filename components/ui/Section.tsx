import Container from "./Container";
export default function Section({ id, children, className = "", pad = true }:
{ id?: string; children: React.ReactNode; className?: string; pad?: boolean }) {
return (
<section id={id} className={className}>
<Container className={pad ? "py-16" : ""}>{children}</Container>
</section>
);
}