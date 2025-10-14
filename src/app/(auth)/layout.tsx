import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const forceDynamic = true;

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    redirect("/management", RedirectType.replace);
  }
  return <>{children}</>;
};

export default AuthLayout;
