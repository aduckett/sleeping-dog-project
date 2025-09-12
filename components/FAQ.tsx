"use client";
import { useState } from "react";
import { Card } from "./ui/Card";

export default function FAQ(){
  const qas = [
    { q: "How much does one bowl cost?", a: "Depends on materials & install. We’ll publish a transparent per‑site cost breakdown on the Donate page." },
    { q: "Where can sponsors add logos?", a: "We embed a sponsor logo inside the bowl so it’s visible when water is poured." },
    { q: "What about maintenance?", a: "We plan simple rinse and drain checks with local partners; the bowl’s channel prevents standing water." },
  ];
  return (
    <div className="grid gap-4">
      {qas.map((it) => <FAQItem key={it.q} q={it.q} a={it.a} />)}
    </div>
  );
}

function FAQItem({ q, a }:{ q:string; a:string }){
  const [open, setOpen] = useState(false);
  return (
    <Card className="p-4">
      <button className="w-full text-left font-medium" onClick={() => setOpen(!open)}>
        {q}
      </button>
      {open && <p className="text-sm text-gray-600 mt-2">{a}</p>}
    </Card>
  );
}
