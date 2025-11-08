interface ManagementLayoutProps {
  children: React.ReactNode;
}

import { AuthProvider } from "@/features/auth/contexts/auth-context";

const ManagementLayout = ({ children }: ManagementLayoutProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ManagementLayout;
