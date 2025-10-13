import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { TRPCProvider } from "@/trpc/client";
import Header from "@/features/common/header";
import Footer from "@/features/common/footer";

import "./globals.css";

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
    >
      <body className={`${rubik.variable} font-sans antialiased`}>
        <NextTopLoader
          showSpinner={false}
          color="#1447e6"
          height={4}
        />
        <TRPCProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TRPCProvider>
      </body>
    </html>
  );
}
