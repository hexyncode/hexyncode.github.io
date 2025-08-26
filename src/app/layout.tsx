import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const fontInter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Callum Howell - UI/UX Designer & Software Engineer",
  description: "Portfolio of Callum Howell, a passionate UI/UX Designer and Software Engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${fontInter.className} antialiased`}>{children}</body>
    </html>
  );
}