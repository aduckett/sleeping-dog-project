import React from "react";


export default function Button({ href, children, variant = "solid", className = "", onClick }:
{ href?: string; children: React.ReactNode; variant?: "solid"|"outline"; className?: string; onClick?: () => void; }) {
const cls = variant === "solid"
? "inline-flex items-center rounded-2xl bg-black text-white px-5 py-3 text-sm font-semibold shadow hover:opacity-90"
: "inline-flex items-center rounded-2xl border px-5 py-3 text-sm font-semibold hover:shadow";
if (href) return <a href={href} className={`${cls} ${className}`}>{children}</a>;
return <button onClick={onClick} className={`${cls} ${className}`}>{children}</button>;
}