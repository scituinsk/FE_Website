"use client";

import { RedirectType } from "next/navigation";
import { useAuth } from "../contexts/auth-context";
import { Redirect } from "@/components/redirect";

interface LoginPageGuardProps {
  children: React.ReactNode;
}

export const LoginPageGuard = ({ children }: LoginPageGuardProps) => {
  const { isLoggedIn, user } = useAuth();

  if (isLoggedIn && user) {
    return (
      <Redirect
        to="/admin"
        type={RedirectType.replace}
      />
    );
  }
  return <>{children}</>;
};
