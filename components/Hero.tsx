import Button from "./ui/Button";
import Container from "./ui/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 bg-grid" />
      <Container className="relative py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* Left column */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Art that hydrates. <span className="text-gray-700">Community that cares.</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Cement <em>Sleeping Dog Bowls</em> for Arizona parks &amp; trails—safe hydration stations that
            double as public art.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="https://www.gofundme.com/f/SleepingDog" className="no-underline">
              Fund the First 10 Bowls
            </Button>
            <Button href="https://givebutter.com/sleepingdog" variant="outline" className="no-underline">
              Sponsor or Give Monthly
            </Button>
            <Button href="/the-bowl" variant="outline">See the Bowl</Button>
          </div>
          <p className="mt-3 text-xs text-gray-500">Arizona first. Nation next.</p>
        </div>

        {/* Right column: image */}
        <div className="relative rounded-3xl border bg-gray-50 shadow-inner overflow-hidden h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px]">
          <Image
            src="https://res.cloudinary.com/dizmpjrdk/image/upload/v1757720393/20250912_1622_Logo_Bowl_Design_remix_01k503pw95fevtjt6z7bqksg6g_kv03x9.png"
            alt="Sleeping Dog cement bowl prototype with lab"
            fill
            sizes="(min-width: 1024px) 44vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
