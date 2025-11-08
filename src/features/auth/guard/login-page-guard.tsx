"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/auth-context";

interface LoginPageGuardProps {
  children: React.ReactNode;
}

export const LoginPageGuard = ({ children }: LoginPageGuardProps) => {
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect jika user sudah login
    if (isLoggedIn && user) {
      // Redirect ke admin page jika user adalah admin
      if (user.role === "ADMIN") {
        router.push("/admin");
      } else {
        // Redirect ke home page jika user biasa
        router.push("/");
      }
    }
  }, [isLoggedIn, user, router]);

  // Hanya render children (login form) jika user belum login
  if (isLoggedIn) {
    return null;
  }

  return <>{children}</>;
};
