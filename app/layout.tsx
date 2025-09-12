import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
title: "Sleeping Dog Project — Art that hydrates.",
description: "Cement sleeping-dog bowls for Arizona parks & trails. Sponsor a bowl or donate today.",
openGraph: {
title: "Sleeping Dog Project",
description: "Art that hydrates. Community that cares.",
type: "website"
},
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className={`${inter.className} min-h-screen bg-white text-gray-900 flex flex-col`}>
<Navbar />
<main className="flex-1">{children}</main>
<Footer />
</body>
</html>
);
}