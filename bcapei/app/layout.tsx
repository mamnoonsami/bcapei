import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PEI Bangladeshi Community",
  description: "Bridging Deltaic Roots with Island Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSerif.variable} h-full antialiased light scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-on-background font-body-md text-body-md overflow-x-hidden">
        <Navbar />
        {/* zoom: 0.75 shrinks all content + text proportionally.
            The Navbar is a sibling above this wrapper, so it stays full-size.
            Adjust the value (0.75 = 75%, 0.8 = 80%) to taste. */}
        <div style={{ zoom: 0.75 }} className="flex flex-col flex-1">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Script
          src="https://cdn.lordicon.com/lordicon.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
