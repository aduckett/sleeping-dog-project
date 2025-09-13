"use client";
import React, { useState } from "react";
import Button from "./ui/Button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvlqweb";

export default function ContactForm(){
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  if (sent) {
    return (
      <div className="rounded-2xl border p-4 bg-white">
        <h3 className="text-xl font-semibold">Thanks — message received!</h3>
        <p className="text-sm text-gray-600 mt-2">
          We’ll get back to you about Sleeping Dog AZ as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-6 grid grid-cols-1 gap-3"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        setErr(null);

        const form = e.currentTarget as HTMLFormElement;
        const data = new FormData(form);

        try {
          const res = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: data,
          });
          if (res.ok) {
            form.reset();
            setSent(true);
          } else {
            const j = await res.json().catch(() => ({}));
            setErr(j?.errors?.[0]?.message || "Something went wrong. Please try again.");
          }
        } catch {
          setErr("Network error. Please check your connection and try again.");
        } finally {
          setLoading(false);
        }
      }}
    >
      {/* Honeypot anti-spam field */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      {/* Custom subject for your inbox */}
      <input type="hidden" name="_subject" value="Sleeping Dog AZ — Website Inquiry" />

      <div className="grid sm:grid-cols-2 gap-3">
        <input className="border rounded-2xl px-4 py-3" name="name" placeholder="Your name" required />
        <input className="border rounded-2xl px-4 py-3" type="email" name="email" placeholder="Email" required />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <input className="border rounded-2xl px-4 py-3" name="organization" placeholder="Business / Organization (optional)" />
        <input className="border rounded-2xl px-4 py-3" name="phone" placeholder="Phone (optional)" />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <select className="border rounded-2xl px-4 py-3" name="topic" defaultValue="Sponsor inquiry" aria-label="Topic">
          <option>Sponsor inquiry</option>
          <option>Donation question</option>
          <option>Media / press</option>
          <option>General question</option>
        </select>

        <select className="border rounded-2xl px-4 py-3" name="sponsor_tier" defaultValue="" aria-label="Sponsor tier">
          <option value="">Sponsor tier (optional)</option>
          <option value="Community Partner - $100">Community Partner — $100</option>
          <option value="Bowl Sponsor - $500">Bowl Sponsor — $500</option>
          <option value="Founding Sponsor - $1500">Founding Sponsor — $1,500</option>
        </select>
      </div>

      <input
        className="border rounded-2xl px-4 py-3"
        name="park_or_trail"
        placeholder="Preferred park or trail (optional)"
      />

      <input
        className="border rounded-2xl px-4 py-3"
        name="logo_url"
        placeholder="Logo URL (optional, for bowl embedding)"
      />

      <textarea
        className="border rounded-2xl px-4 py-3 min-h-[140px]"
        name="message"
        placeholder="Questions or details: interest in sponsoring, timeline, city, anything we should know."
        required
      />

      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input type="checkbox" name="newsletter_optin" className="h-4 w-4" />
        Keep me updated on installs & events
      </label>

      {err && <p className="text-sm text-red-600">{err}</p>}

      <Button className="mt-2" onClick={() => {}}>
        {loading ? "Sending..." : "Send message"}
      </Button>

      <p className="text-xs text-gray-500 mt-2">
        By submitting, you agree to be contacted about Sleeping Dog AZ. We’ll never sell your info.
      </p>
    </form>
  );
}