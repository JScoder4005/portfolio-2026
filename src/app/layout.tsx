import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CommandPalette from "@/components/CommandPalette";
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
  title: "Uday Kumar M — Full Stack Developer",
  description:
    "Senior software engineer with 6+ years building performant, type-safe web applications with React.js, Next.js, TypeScript, and Python services.",
  keywords: [
    "Uday Kumar M",
    "Full Stack Developer",
    "Senior Software Engineer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Uday Kumar M" }],
  openGraph: {
    title: "Uday Kumar M — Full Stack Developer",
    description:
      "Senior software engineer with 6+ years building performant, type-safe web applications with React.js, Next.js, TypeScript, and Python services.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-fuchsia-400">
        {children}
        <CommandPalette />
      </body>
    </html>
  );
}
