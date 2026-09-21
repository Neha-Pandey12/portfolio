import type { Metadata } from "next";
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

const title = "Neha Kumari Pandey | AI & Software Developer Portfolio";
const description =
  "Portfolio of Neha Kumari Pandey, a BCA student interested in Generative AI, Machine Learning, software development, and AI-powered applications.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI Developer",
    "Generative AI",
    "Agentic AI",
    "Large Language Models",
    "MCP",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Neha Kumari Pandey" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: title,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-200">
        {children}
      </body>
    </html>
  );
}
