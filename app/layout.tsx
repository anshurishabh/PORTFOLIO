import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Anshu Kumar Rishabh — Full-Stack & AI Developer",
  description:
    "Portfolio of Anshu Kumar Rishabh — full-stack developer and machine learning enthusiast building AI-powered web systems with Next.js, XGBoost, and real-time architectures.",
  keywords: [
    "Anshu Kumar Rishabh",
    "Full Stack Developer",
    "AI Developer",
    "Machine Learning Engineer",
    "Next.js Portfolio",
  ],
  openGraph: {
    title: "Anshu Kumar Rishabh — Full-Stack & AI Developer",
    description:
      "Building intelligent systems at the intersection of full-stack engineering and machine learning.",
    siteName: "Anshu Kumar Rishabh — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshu Kumar Rishabh — Full-Stack & AI Developer",
    description:
      "Building intelligent systems at the intersection of full-stack engineering and machine learning.",
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
      className={`${archivoBlack.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">{children}</body>
    </html>
  );
}
