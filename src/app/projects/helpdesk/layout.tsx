import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontInter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Helpdesk Dashboard',
  description: 'A minimalist support ticket dashboard.',
  authors: [{name: "Callum Howell", url: "https://hexyncode.onrender.com"}]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${fontInter.className} antialiased`}>{children}</body>
    </html>
  );
}