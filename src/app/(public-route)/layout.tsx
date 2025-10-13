import { LandingPageHeader } from "@/features/common/landing-page-header";
import Footer from "@/features/common/footer";

import { ScrollToTopButton } from "@/components/scroll-on-top";

export default function PublicPathLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LandingPageHeader />
      {children}
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
