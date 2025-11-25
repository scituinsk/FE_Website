"use client";

import { RedirectType } from "next/navigation";
import { useAuth } from "../contexts/auth-context";
import { Redirect } from "@/components/redirect";

interface ProtectedGuardProps {
  children: React.ReactNode;
}

export const ProtectedGuard = ({ children }: ProtectedGuardProps) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <Redirect
        to="/login"
        type={RedirectType.replace}
      />
    );
  }

  return <>{children}</>;
};
