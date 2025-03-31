import type React from "react";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

// Load fonts with proper subsets and display settings
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

// Metadata with favicon
export const metadata: Metadata = {
  title: "Flexverse - Innovative Solutions for Modern Challenges",
  description: "Flexverse is your partner in creating flexible solutions for today's complex business environment",
  generator: "v0.dev",
  icons: {
    icon: "/Footer.png", // Update to "/favicon.ico" if using ICO
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* If using ICO: */}
        {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
