import Container from "./ui/Container";


export default function Footer() {
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