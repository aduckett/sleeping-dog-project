export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
return <div className={`rounded-xl2 border bg-white shadow-soft ${className}`}>{children}</div>;
}