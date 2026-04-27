import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jhulelal Builders | Building Trust, Brick by Brick",
  description: "50+ Years of Legacy in Construction Excellence. Quality residential and commercial construction services in Siliguri, West Bengal.",
  keywords: "construction, builders, Siliguri, Jhulelal Builders, real estate, architecture, building design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
