import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kamran Khan — AI Developer | Websites & AI for Businesses",
  description:
    "AI Developer building AI/ML systems, LLM & RAG products, websites, and apps with LangChain, FastAPI, and Python.",
  metadataBase: new URL("https://kamran-khan-portfolio.vercel.app"),
  openGraph: {
    title: "Kamran Khan — AI Developer",
    description:
      "AI/ML systems, websites, and apps. LLM, RAG, FastAPI, ML/DL.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
