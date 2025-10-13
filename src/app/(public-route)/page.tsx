import { HomePage } from "@/features/home-page/pages/home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SCIT UIN Sunan Kalijaga",
  description: "Welcome to SCIT UIN Sunan Kalijaga, the Student Community of Information Technology at UIN Sunan Kalijaga Yogyakarta.",
};

export default function Page() {
  return <HomePage />;
}
