import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Simão - Solo Developer",
  description: "Solo developer crafting thoughtful solutions and sharing ideas through code. Building web applications with React, Next.js, and TypeScript.",
  keywords: ["developer", "React", "Next.js", "TypeScript", "web development"],
  authors: [{ name: "Lucas Simão" }],
  creator: "Lucas Simão",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lucassimao.com",
    title: "Lucas Simão - Solo Developer",
    description: "Solo developer crafting thoughtful solutions and sharing ideas through code.",
    siteName: "Lucas Simão",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Simão - Solo Developer",
    description: "Solo developer crafting thoughtful solutions and sharing ideas through code.",
    creator: "@lsimaocosta",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
