"use client";
import Link from "next/link";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <Container className="py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="font-bold tracking-tight">Sleeping Dog Project</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:text-black">About</Link>
          <Link href="/the-bowl" className="hover:text-black">The Bowl</Link>
          <Link href="/sponsor" className="hover:text-black">Sponsor</Link>
          <Link href="/donate" className="hover:text-black">Donate</Link>
          <Link href="/locations" className="hover:text-black">Locations</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </nav>
        <div className="hidden md:block">
  <Button href="https://givebutter.com/sleepingdog">Donate</Button>
</div>
        <button className="md:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
      </Container>
      {open && (
        <div className="md:hidden border-t bg-white">
          <Container className="py-4 flex flex-col gap-3 text-sm">
            <Link href="/about">About</Link>
            <Link href="/the-bowl">The Bowl</Link>
            <Link href="/sponsor">Sponsor</Link>
            <Link href="/donate">Donate</Link>
            <Link href="/locations">Locations</Link>
            <Link href="/contact">Contact</Link>
          </Container>
        </div>
      )}
    </header>
  );
}
