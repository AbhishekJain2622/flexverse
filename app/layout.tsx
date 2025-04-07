import type { Metadata } from "next";
import { Inter, Montserrat, Teko, Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

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

const teko = Teko({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-teko",
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Flexverse - Innovative Solutions for Modern Challenges",
  description: "Flexverse is your partner in creating flexible solutions for today's complex business environment",
  icons: {
    icon: "/Footer.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${teko.variable} ${roboto.variable}`}>
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

      <body>
        <ThemeProvider attribute="class" defaultTheme="">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
