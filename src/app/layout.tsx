import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramesh — Founder, Product Strategist & SaaS Builder",
  description:
    "Founder building scalable SaaS systems, ERP platforms, operational tools, and startup-focused digital products.",
  openGraph: {
    title: "Ramesh — Founder, Product Strategist & SaaS Builder",
    description:
      "Founder building scalable SaaS systems, ERP platforms, operational tools, and startup-focused digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
