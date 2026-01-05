import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/language/LanguageProvider";
import { getServerLanguage } from "@/lib/server-language";
import { Analytics } from "@vercel/analytics/react";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = await getServerLanguage()

  return (
    <html lang={language} data-theme="light" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider initialLanguage={language}>
          <ThemeProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Analytics />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
