import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kamran Khan — AI Developer | Websites & AI for Businesses",
  description:
    "AI developer building LLM & RAG systems, ML/DL pipelines, and restaurant-ready websites with practical AI services.",
  metadataBase: new URL("https://kamran-portfolio.vercel.app"),
  openGraph: {
    title: "Kamran Khan — AI Developer",
    description:
      "Websites and AI systems for restaurants and businesses. LLM, RAG, FastAPI, ML/DL.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
