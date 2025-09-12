import Button from "./ui/Button";
import Container from "./ui/Container";
import Image from "next/image";

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 bg-grid" />
      <Container className="relative py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Art that hydrates. <span className="text-gray-700">Community that cares.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Cement <em>Sleeping Dog Bowls</em> for Arizona parks & trails—safe hydration stations that double as public art.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/donate">Donate Now</Button>
            <Button href="/sponsor" variant="outline">Sponsor a Bowl</Button>
            <Button href="/the-bowl" variant="outline">See the Bowl</Button>
          </div>
          <p className="mt-3 text-xs text-gray-500">Arizona first. Nation next.</p>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl border bg-gray-50 shadow-inner overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dizmpjrdk/image/upload/v1757718028/Untitled_design_1_b4kctn.png"
            alt="Sleeping Dog cement bowl prototype with lab"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
           />
        </div>
      </Container>
    </section>
  );
}
