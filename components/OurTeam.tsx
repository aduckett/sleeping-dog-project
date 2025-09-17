import Image from "next/image";

const TEAM = [
  {
    family: "The Duckett Family",
    role: "Too Hot To Walk",
    desc: "Dog book writers and community promoters — leading marketing, outreach, and bowl placement.",
    img: "https://res.cloudinary.com/dizmpjrdk/image/upload/v1758137334/20250917_1227_Thirsty_Dogs_Duo_remix_01k5cj7yc1fkebvaf9af1x36r8_1_mmoleb.png",
  },
  {
    family: "The Yarhaus Family",
    role: "Modern Industry",
    desc: "Arizona-based manufacturing company helping design molds for safe bowls.",
    img: "https://res.cloudinary.com/dizmpjrdk/image/upload/v1758137412/20250917_1229_Dog_Drinking_Cement_remix_01k5cjbwqyf2ca5yapp09t5053_e38npl.png",
  },
  {
    family: "The Davenport Family",
    role: "Xcess Custom",
    desc: "Specialists in cement pouring and using the molds to create bowls for installation.",
    img: "https://res.cloudinary.com/dizmpjrdk/image/upload/v1758137214/20250917_1223_Giant_Bull_Terrier_remix_01k5chxbkzfphrrz252ysf3nkn_pjugio.png",
  },
  {
    family: "The Reinertson Family",
    role: "Community Partners",
    desc: "Local friends to the animal community — helping with planning and outreach.",
    img: "https://res.cloudinary.com/dizmpjrdk/image/upload/v1758137223/20250917_1222_Dogs_Drinking_Together_remix_01k5chz23kft1va639tq09sca8_gpukpw.png",
  },
];

export default function OurTeam() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold">Who We Are</h2>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((t) => (
            <article
              key={t.family}
              className="group rounded-2xl border bg-white p-5 text-center transition
                         hover:shadow-md active:shadow-sm"
            >
              {/* >>> This is the “quick visual polish” image wrapper <<< */}
              <div
                className="relative mx-auto h-32 w-32 rounded-full overflow-hidden ring-2 ring-gray-200
                           transition group-hover:ring-gray-300"
                aria-hidden="true"
              >
                <Image
                  src={t.img}
                  alt={`${t.family} — ${t.role}`}
                  fill
                  sizes="128px"
                  className="object-cover grayscale transition duration-300
                             group-hover:grayscale-0"
                  priority={false}
                />
              </div>

              <h3 className="mt-3 font-semibold">{t.family}</h3>
              <p className="text-[11px] uppercase tracking-wide text-gray-500">{t.role}</p>
              <p className="text-sm text-gray-600 mt-2">{t.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}