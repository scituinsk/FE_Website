"use client";

import { RedirectType } from "next/navigation";
import { useAuth } from "../contexts/auth-context";
import { Redirect } from "@/components/redirect";

interface RoleAdminGuardProps {
  children: React.ReactNode;
}

export const RoleAdminGuard = ({ children }: RoleAdminGuardProps) => {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <Redirect
        to="/login"
        type={RedirectType.replace}
      />
    );
  }

  // Redirect jika user bukan admin
  if (user && user.role !== "ADMIN") {
    return (
      <Redirect
        to="/"
        type={RedirectType.replace}
      />
    );
  }

  return <>{children}</>;
};
