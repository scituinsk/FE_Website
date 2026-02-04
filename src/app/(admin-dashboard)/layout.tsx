interface ManagementLayoutProps {
  children: React.ReactNode;
}

import { AuthProvider } from "@/features/auth/contexts/auth-context";
import { LoadingBarProvider } from "@/contexts/loading-bar-context";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

const ManagementLayout = ({ children }: ManagementLayoutProps) => {
  return (
    <AuthProvider>
      <LoadingBarProvider enableTanstackSupport={true}>{children}</LoadingBarProvider>
    </AuthProvider>
  );
};

export default ManagementLayout;
