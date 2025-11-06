"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/auth-context";

interface RoleAdminGuardProps {
  children: React.ReactNode;
}

export const RoleAdminGuard = ({ children }: RoleAdminGuardProps) => {
  const { user, isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect jika user tidak login
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    // Redirect jika user bukan admin
    if (user && user.role !== "ADMIN") {
      router.push("/");
      return;
    }
  }, [isLoggedIn, user, router]);

  // Hanya render children jika user adalah admin
  if (!isLoggedIn || !user || user.role !== "ADMIN") {
    return null;
  }

  return <>{children}</>;
};
