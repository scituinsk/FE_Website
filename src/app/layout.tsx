import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Rubik } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import ReactQueryProvider from "@/providers/react-query-provider";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Study Club Information Technology UIN Sunan Kalijaga",
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
      <GoogleTagManager gtmId="G-GTEMB86C6D" />
      <body className={`${rubik.className} font-sans antialiased`}>
        <NuqsAdapter>
          <ReactQueryProvider>
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

              <Toaster />
              {children}
            </ThemeProvider>
          </ReactQueryProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
