import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritam Roa — Matrix Portfolio",
  description: "Matrix-inspired portfolio with immersive motion and glitch aesthetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={`${jetBrainsMono.variable} antialiased bg-[#01090b] text-[#dfffe8]`}>
        {children}
      </body>
    </html>
  );
}
