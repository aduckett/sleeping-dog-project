import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      {/* Trust band */}
      <div className="bg-gray-50 border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-gray-600">
          Donations are processed securely via <strong>GoFundMe</strong> and <strong>Givebutter</strong> (Stripe / PayPal).
          The GoFundMe Guarantee may apply on eligible gifts. Links open in a new tab.
        </div>
      </div>

      {/* Your existing footer content below */}
      <div className="mx-auto max-w-6xl px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* ...existing columns/links... */}
      </div>
    </footer>
  );

  return (
    <footer className="border-t">
      <Container className="py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <p>© {new Date().getFullYear()} Sleeping Dog Project. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-black">Instagram</a>
          <a href="#" className="hover:text-black">TikTok</a>
          <a href="#" className="hover:text-black">Email</a>
        </div>
      </Container>
    </footer>
  );
}
