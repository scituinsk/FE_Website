import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Plus_Jakarta_Sans } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { TRPCProvider } from "@/trpc/client";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | SCIT UIN Sunan Kalijaga",
    default: "SCIT UIN Sunan Kalijaga",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/scit-light.png",
        href: "/favicon/scit-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon/scit.png",
        href: "/favicon/scit-dark.png",
      },
    ],
  },
  description: "Komunitas mahasiswa teknologi informasi UIN Sunan Kalijaga Yogyakarta yang berfokus pada pengembangan skill dan inovasi teknologi.",
  keywords: "SCIT, UIN Suka, teknologi informasi, programming, web development, mobile development",
  authors: [{ name: "SCIT UIN Suka" }],
  openGraph: {
    title: "SCIT UIN Suka - Student Community of Information Technology",
    description: "Komunitas mahasiswa teknologi informasi UIN Sunan Kalijaga Yogyakarta",
    url: "https://scit.uin-suka.ac.id",
    siteName: "SCIT UIN Suka",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className={`${plusJakartaSans.className} font-sans antialiased`}>
        <NuqsAdapter>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader
              showSpinner={false}
              color="#2563EB"
              height={4}
            />
            <TRPCProvider>
              <Toaster />
              <main>{children}</main>
            </TRPCProvider>
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
