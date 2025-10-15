import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { TRPCProvider } from "@/trpc/client";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
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
      <body className={`${rubik.variable} font-sans antialiased`}>
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
