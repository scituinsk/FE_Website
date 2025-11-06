"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/auth-context";

interface ProtectedGuardProps {
  children: React.ReactNode;
}

export const ProtectedGuard = ({ children }: ProtectedGuardProps) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect ke login jika user tidak login
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  // Hanya render children jika user sudah login
  if (!isLoggedIn) {
    return null;
  }

  return <>{children}</>;
};
