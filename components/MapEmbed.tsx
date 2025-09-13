export default function MapEmbed({
  src = process.env.NEXT_PUBLIC_MAP_EMBED_URL,
  title = "Sleeping Dog Project – Locations",
}: {
  src?: string;
  title?: string;
}) {
  if (!src) {
    return (
      <div className="h-full flex items-center justify-center text-sm text-gray-500">
        Add <code>NEXT_PUBLIC_MAP_EMBED_URL</code> to <code>.env.local</code> to show the map embed.
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      <iframe
        title={title}
        src={src}
        width="100%"
        height="100%"
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
