"use client";
import React, { useState } from "react";
import Button from "./ui/Button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvlqweb";

export default function ContactForm() {
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

      {/* Name / Email */}
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          className="border rounded-2xl px-4 py-3 text-base min-h-11"
          name="name"
          placeholder="Your name"
          aria-label="Your name"
          autoComplete="name"
          autoCapitalize="words"
          autoCorrect="off"
          required
        />
        <input
          className="border rounded-2xl px-4 py-3 text-base min-h-11"
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          autoComplete="email"
          inputMode="email"
          required
        />
      </div>

      {/* Org / Phone */}
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          className="border rounded-2xl px-4 py-3 text-base min-h-11"
          name="organization"
          placeholder="Business / Organization (optional)"
          aria-label="Business or organization (optional)"
          autoCapitalize="words"
          autoCorrect="off"
        />
        <input
          className="border rounded-2xl px-4 py-3 text-base min-h-11"
          name="phone"
          placeholder="Phone (optional)"
          aria-label="Phone (optional)"
          autoComplete="tel"
          inputMode="tel"
        />
      </div>

      {/* Topic / Tier */}
      <div className="grid sm:grid-cols-2 gap-3">
        <select
          className="border rounded-2xl px-4 py-3 text-base min-h-11"
          name="topic"
          defaultValue="Sponsor inquiry"
          aria-label="Topic"
        >
          <option>Sponsor inquiry</option>
          <option>Donation question</option>
          <option>Media / press</option>
          <option>General question</option>
        </select>

        <select
          className="border rounded-2xl px-4 py-3 text-base min-h-11"
          name="sponsor_tier"
          defaultValue=""
          aria-label="Sponsor tier"
        >
          <option value="">Sponsor tier (optional)</option>
          <option value="Community Partner - $100">Community Partner — $100</option>
          <option value="Bowl Sponsor - $500">Bowl Sponsor — $500</option>
          <option value="Founding Sponsor - $1500">Founding Sponsor — $1,500</option>
        </select>
      </div>

      {/* Location / Logo URL */}
      <input
        className="border rounded-2xl px-4 py-3 text-base min-h-11"
        name="park_or_trail"
        placeholder="Preferred park or trail (optional)"
        aria-label="Preferred park or trail (optional)"
        autoCapitalize="words"
        autoCorrect="off"
      />

      <input
        className="border rounded-2xl px-4 py-3 text-base min-h-11"
        name="logo_url"
        placeholder="Logo URL (optional, for bowl embedding)"
        aria-label="Logo URL (optional)"
        inputMode="url"
        autoCapitalize="none"
        autoCorrect="off"
      />

      {/* Message */}
      <textarea
        className="border rounded-2xl px-4 py-3 text-base min-h-[160px]"
        name="message"
        placeholder="Questions or details: interest in sponsoring, timeline, city, anything we should know."
        aria-label="Message"
        required
      />

      {/* Opt-in */}
      <label className="flex items-center gap-2 text-sm text-gray-700 active:opacity-80">
        <input type="checkbox" name="newsletter_optin" className="h-5 w-5" />
        <span>Keep me updated on installs & events</span>
      </label>

      {/* Error message (accessible) */}
      {err && (
        <p className="text-sm text-red-600" role="alert" aria-live="polite">
          {err}
        </p>
      )}

      {/* Submit */}
      <Button className="mt-2 min-h-11" onClick={() => {}}>
        {loading ? "Sending..." : "Send message"}
      </Button>

      <p className="text-xs text-gray-500 mt-2">
        By submitting, you agree to be contacted about Sleeping Dog AZ. We’ll never sell your info.
      </p>
    </form>
  );
}
