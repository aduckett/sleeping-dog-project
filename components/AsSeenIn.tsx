export default function AsSeenIn() {
  return (
    <section className="bg-white border-y">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-center text-xs uppercase tracking-wider text-gray-500">As Seen In</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {/* Tucson.com */}
          <a
            href="https://tucson.com/news/local/article_2f28aaff-3517-5b53-b546-b9e5a979a7c8.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 hover:opacity-90"
            aria-label="Tucson.com article about water safety for dogs"
          >
            <img
              src="/logos/tucson.svg" /* optional: add a small SVG or PNG logo */
              alt=""
              className="h-6 w-auto opacity-80"
            />
            <span className="text-sm">Tucson.com</span>
          </a>

          {/* AKC article */}
          <a
            href="https://www.akc.org/expert-advice/health/communal-water-bowl-safety/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 hover:opacity-90"
            aria-label="AKC expert advice: communal water bowl safety"
          >
            <img src="/logos/akc.svg" alt="" className="h-6 w-auto opacity-80" />
            <span className="text-sm">American Kennel Club</span>
          </a>
        </div>
      </div>
    </section>
  );
}
