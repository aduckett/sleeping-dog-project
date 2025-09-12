// app/page.tsx (Next.js App Router + TypeScript)
// Paste this file at: app/page.tsx
// Assumes Tailwind CSS is enabled. If not, I can give you the Tailwind setup next.

import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="font-bold tracking-tight">Sleeping Dog Project</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#bowl" className="hover:text-black">The Bowl</a>
            <a href="#sponsor" className="hover:text-black">Sponsor</a>
            <a href="#donate" className="hover:text-black">Donate</a>
            <a href="#locations" className="hover:text-black">Locations</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
          <a href="#donate" className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-medium shadow-sm hover:shadow md:ml-4">Donate</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Art that hydrates. <span className="text-gray-700">Community that cares.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We install durable, cement <em>Sleeping Dog Bowls</em> across Arizona parks and trails—
              safe hydration stations that double as public art.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#donate" className="rounded-2xl bg-black text-white px-5 py-3 text-sm font-semibold shadow hover:opacity-90">Donate Now</a>
              <a href="#sponsor" className="rounded-2xl border px-5 py-3 text-sm font-semibold shadow hover:shadow-md">Sponsor a Bowl</a>
              <a href="#bowl" className="rounded-2xl border px-5 py-3 text-sm font-semibold">See the Bowl</a>
            </div>
            <p className="mt-3 text-xs text-gray-500">Arizona first. Nation next.</p>
          </div>
          {/* Placeholder visual */}
          <div className="relative aspect-[4/3] rounded-3xl border bg-gray-50 shadow-inner flex items-center justify-center">
            <div className="text-center p-6">
              <div className="text-7xl">🛌🐶</div>
              <p className="mt-3 text-gray-600">Prototype render placeholder</p>
              <p className="text-xs text-gray-400">Replace with photos/3D renders of the Sleeping Dog Bowl</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">Why this project exists</h2>
            <p className="mt-4 text-gray-700">
              Arizona heat is no joke—for people or their pups. Many public spaces lack safe, dependable
              water access for dogs. Sleeping Dog Project solves this with beautiful, durable hydration
              stations designed as a single cement sculpture: a sleeping dog base with a large bowl on top
              and built-in drainage.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <li className="flex items-start gap-3"><span>💧</span><span>Safe, drainable bowl to prevent standing water</span></li>
              <li className="flex items-start gap-3"><span>🪨</span><span>Solid cement construction for durability</span></li>
              <li className="flex items-start gap-3"><span>🎨</span><span>Public art that sparks joy and community pride</span></li>
              <li className="flex items-start gap-3"><span>🌎</span><span>Arizona first—with national expansion plans</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold">Project snapshot</h3>
            <dl className="mt-3 space-y-2 text-sm text-gray-700">
              <div className="flex justify-between"><dt>Phase</dt><dd>Arizona Launch</dd></div>
              <div className="flex justify-between"><dt>Goal</dt><dd>First 25 bowls</dd></div>
              <div className="flex justify-between"><dt>Use of funds</dt><dd>Materials, install, maintenance</dd></div>
              <div className="flex justify-between"><dt>Nonprofit-friendly</dt><dd>Yes (donations + sponsors)</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* The Bowl */}
      <section id="bowl" className="">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl border p-6 bg-white">
            <h2 className="text-2xl font-bold">The Bowl</h2>
            <p className="mt-4 text-gray-700">
              A single-piece cement sculpture with a sleeping dog form at the base and a large, drainable
              bowl up top. Designed for parks, trails, and high-traffic outdoor spaces.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>• Anti-tip weight & anchored installation</li>
              <li>• Drainage channel prevents standing water</li>
              <li>• Smooth edges and pet-safe finishes</li>
              <li>• Optional sponsor logo <em>embedded inside the bowl</em>—visible when water is poured</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-gray-50 h-80 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Photo / 3D render placeholder</span>
          </div>
        </div>
      </section>

      {/* Sponsor */}
      <section id="sponsor" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Sponsor a Bowl</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Businesses and community partners can fund bowls that include a tasteful sponsor logo inside the
            basin. It’s community impact <span className="italic">and</span> memorable brand visibility.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="font-semibold">Community Partner</h3>
              <p className="text-sm text-gray-600">Website + social thank you</p>
              <p className="mt-4 text-3xl font-extrabold">$500</p>
              <a href="#contact" className="mt-6 inline-flex rounded-xl border px-4 py-2 text-sm font-medium">Inquire</a>
            </div>
            <div className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="font-semibold">Bowl Sponsor</h3>
              <p className="text-sm text-gray-600">Logo embedded inside bowl</p>
              <p className="mt-4 text-3xl font-extrabold">$1,500</p>
              <a href="#contact" className="mt-6 inline-flex rounded-xl border px-4 py-2 text-sm font-medium">Inquire</a>
            </div>
            <div className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="font-semibold">Founding Sponsor</h3>
              <p className="text-sm text-gray-600">Multiple bowls + featured partner</p>
              <p className="mt-4 text-3xl font-extrabold">$5,000</p>
              <a href="#contact" className="mt-6 inline-flex rounded-xl border px-4 py-2 text-sm font-medium">Inquire</a>
            </div>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold">Donate</h2>
            <p className="mt-3 text-gray-700">
              Help fund materials, installation, and maintenance for new bowls across Arizona.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="rounded-2xl bg-black text-white px-5 py-3 text-sm font-semibold shadow">GoFundMe</a>
              <a href="#" className="rounded-2xl border px-5 py-3 text-sm font-semibold">Givebutter</a>
            </div>
            <p className="mt-3 text-xs text-gray-500">Choose your preferred platform</p>
          </div>
          <div className="rounded-2xl border bg-gray-50 h-56 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Donor wall / progress bar placeholder</span>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Locations</h2>
          <p className="mt-3 text-gray-700">Map of installed & planned bowls (embed map)</p>
          <div className="mt-6 rounded-2xl border bg-white h-72 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Interactive map placeholder</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-3 text-gray-700">Have a park in mind or want to sponsor a bowl? Send a note.</p>
            <form className="mt-6 grid grid-cols-1 gap-3" onSubmit={(e) => e.preventDefault()}>
              <input className="border rounded-xl px-4 py-3" placeholder="Name" />
              <input className="border rounded-xl px-4 py-3" placeholder="Email" />
              <textarea className="border rounded-xl px-4 py-3 min-h-[120px]" placeholder="Message" />
              <button className="rounded-2xl bg-black text-white px-5 py-3 text-sm font-semibold w-fit">Send</button>
            </form>
          </div>
          <div className="rounded-2xl border bg-gray-50 h-72 flex items-center justify-center">
            <span className="text-gray-500 text-sm">FAQ / quick links placeholder</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center md:justify-between gap-4">
          <p>© {new Date().getFullYear()} Sleeping Dog Project. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black">Instagram</a>
            <a href="#" className="hover:text-black">TikTok</a>
            <a href="#" className="hover:text-black">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
