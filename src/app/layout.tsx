import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/trpc/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SCIT UIN Suka - Student Community of Information Technology",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <TRPCProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TRPCProvider>
      </body>
    </html>
  );
}
