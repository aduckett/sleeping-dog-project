"use client";
import React from "react";

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold no-underline " +
    "min-h-11 min-w-[44px]"; // 44px min tap size

  const cls =
    variant === "solid"
      ? `${base} bg-black text-white shadow hover:opacity-90 active:opacity-80`
      : `${base} border hover:shadow active:opacity-80`;

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`${cls} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${cls} ${className}`}>
      {children}
    </button>
  );
}
