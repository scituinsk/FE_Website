import { Footer } from "@/features/common/footer";
import { LandingPageHeader } from "@/features/common/landing-page-header";
import { ScrollToTopButton } from "@/components/scroll-on-top";

export default function PublicPathLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LandingPageHeader />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
