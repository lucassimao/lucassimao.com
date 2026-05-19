import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/language/LanguageProvider";
import { getServerLanguage } from "@/lib/server-language";
import { Analytics } from "@vercel/analytics/react";
import { SITE_URL, personJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lucas Simão — Staff Software Engineer (Remote, Brazil)",
    template: "%s · Lucas Simão",
  },
  description:
    "Staff Software Engineer with 10+ years building large-scale web and mobile products. Hands-on across React, Next.js, React Native, Node.js, Go, and PostgreSQL. Based in Brazil, working remotely with teams worldwide.",
  applicationName: "Lucas Simão",
  authors: [{ name: "Lucas Simão", url: SITE_URL }],
  creator: "Lucas Simão",
  publisher: "Lucas Simão",
  keywords: [
    "Lucas Simão",
    "Staff Software Engineer",
    "Senior Software Engineer",
    "Full-stack engineer",
    "Remote software engineer",
    "Brazil software engineer",
    "Teresina",
    "React",
    "Next.js",
    "React Native",
    "Expo",
    "TypeScript",
    "Node.js",
    "Go",
    "PostgreSQL",
    "AWS",
    "Cloudflare Workers",
    "AI engineering",
    "LLM",
    "Bold.org",
    "open to opportunities",
    "hiring",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "pt-BR": "/",
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    url: SITE_URL,
    siteName: "Lucas Simão",
    title: "Lucas Simão — Staff Software Engineer (Remote, Brazil)",
    description:
      "Full-stack engineer with 10+ years building large-scale web and mobile products. React, Next.js, React Native, Go, PostgreSQL. Currently at Bold.org.",
    firstName: "Lucas",
    lastName: "Simão",
    username: "lsimaocosta",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Simão — Staff Software Engineer",
    description:
      "Full-stack engineer with 10+ years shipping web and mobile products. React, Next.js, React Native, Go.",
    creator: "@lsimaocosta",
    site: "@lsimaocosta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = await getServerLanguage();

  return (
    <html lang={language} data-theme="light" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider initialLanguage={language}>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Analytics />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
