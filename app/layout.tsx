import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "CTW — Clips That Work",
  description: "Editorial video studio for creators, founders and modern brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
