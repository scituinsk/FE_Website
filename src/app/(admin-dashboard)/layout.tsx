interface ManagementLayoutProps {
  children: React.ReactNode;
}

import { AuthProvider } from "@/features/auth/contexts/auth-context";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

const ManagementLayout = ({ children }: ManagementLayoutProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ManagementLayout;
