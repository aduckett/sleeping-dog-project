"use client";
import React, { useState } from "react";
import Button from "./ui/Button";

export default function ContactForm(){
  const [sent, setSent] = useState(false);
  return (
    <form className="mt-6 grid grid-cols-1 gap-3" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <input className="border rounded-2xl px-4 py-3" placeholder="Name" required />
      <input type="email" className="border rounded-2xl px-4 py-3" placeholder="Email" required />
      <textarea className="border rounded-2xl px-4 py-3 min-h-[120px]" placeholder="Message" />
      <Button>{sent ? "Thanks — we’ll reply soon" : "Send"}</Button>
    </form>
  );
}
