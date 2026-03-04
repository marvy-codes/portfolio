import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Marvellous — Full-Stack & Blockchain Engineer",
  description:
    "Full-Stack & Blockchain Engineer with deep Smart Contract Security expertise. Building secure, scalable blockchain and backend systems with 5+ years of experience across Web2 and Web3.",
  keywords: [
    "Blockchain Engineer",
    "Smart Contract Security",
    "Solidity",
    "DeFi",
    "Full-Stack Developer",
    "Security Researcher",
    "Web3",
    "EVM",
    "Move",
  ],
  openGraph: {
    title: "Marvellous — Full-Stack & Blockchain Engineer",
    description:
      "Building secure, scalable blockchain and backend systems. Smart contract security researcher with 5+ years across Web2 and Web3.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
