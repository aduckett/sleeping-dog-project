import Image from "next/image";

const TEAM = [
  {
    family: "The Duckett Family",
    role: "Too Hot To Walk",
    desc: "Dog book writers and community promoters — leading marketing, outreach, and bowl placement.",
    img: "/team/duckett.jpg", // add placeholder images later
  },
  {
    family: "The Yarhaus Family",
    role: "Modern Industry",
    desc: "Arizona-based manufacturing company helping design molds for safe bowls.",
    img: "/team/yarurs.jpg",
  },
  {
    family: "The Davenport Family",
    role: "Xcess Custom",
    desc: "Specialists in cement pouring and using the molds to create bowls for installation.",
    img: "/team/davenport.jpg",
  },
  {
    family: "The Reinertson Family",
    role: "Community Partners",
    desc: "Local friends to the animal community — helping with planning and outreach.",
    img: "/team/cookeboo.jpg",
  },
];

export default function OurTeam() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold">Who We Are</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((t) => (
            <div key={t.family} className="rounded-2xl border p-4 bg-white text-center">
              <div className="relative h-32 w-32 mx-auto rounded-full overflow-hidden">
                <Image
                  src={t.img}
                  alt={t.family}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3 font-semibold">{t.family}</h3>
              <p className="text-xs uppercase text-gray-500">{t.role}</p>
              <p className="text-sm text-gray-600 mt-2">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
