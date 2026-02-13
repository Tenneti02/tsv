import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "T S V Subrahmanyam | Full Stack Developer",
  description: "Professional Full Stack Developer specializing in high-performance modern web experiences.",
  keywords: "T S V Subrahmanyam, TSVS, Tenneti02, Full Stack Developer, Portfolio, Web Development, UI/UX, Javascript, React",
  authors: [{ name: "T S V Subrahmanyam" }],
  openGraph: {
    type: "website",
    url: "https://tenneti02.github.io/",
    title: "T S V  Subrahmanyam | Full Stack Developer",
    description: "Professional Full Stack Developer specializing in high-performance modern web experiences.",
    images: [{ url: "/Assets/images/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "T S V Subrahmanyam | Full Stack Developer",
    description: "Professional Full Stack Developer specializing in high-performance modern web experiences.",
    images: ["/Assets/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased text-neo-black font-display selection:bg-neo-black selection:text-neo-yellow`}
      >
        <Cursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
