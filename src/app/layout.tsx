import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Rubik } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

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
      </body>
    </html>
  );
}
