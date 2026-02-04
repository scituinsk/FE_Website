"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, AlertCircle, User } from "lucide-react";

import { useLogin } from "@/features/auth/queries/useLogin";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/field";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LoginPageGuard } from "@/features/auth/guard/login-page-guard";

const loginFormSchema = z.object({
  email: z.email("Invalid email address").min(1, "Email wajib diisi"),
  password: z.string().min(1, "Password wajib diisi").min(8, "Password harus terdiri dari minimal 8 karakter"),
});

// Custom Error Component
const CustomFieldError = ({ error }: { error?: { message?: string } }) => {
  if (!error?.message) return null;

  return (
    <Alert
      variant="destructive"
      className="mt-2"
    >
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="text-sm">{error.message}</AlertDescription>
    </Alert>
  );
};

const LoginForm = () => {
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const redirectTo = searchParams.get("redirect") || "/admin";
  const { mutate: loginMutation, isPending: loginMutationIsPending } = useLogin({
    mutationConfig: {
      onError: (error: any) => {
        const errorMessage = error.status == 401 ? "Email atau password salah" : "Internal server error";
        toast.error(errorMessage);
        console.error("Login error:", error);
      },
      onSuccess: () => {
        window.location.href = redirectTo;
      },
    },
  });

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit({ email, password }: z.infer<typeof loginFormSchema>) {
    loginMutation({ email, password });
  }

  return (
    <form
      id="login-form"
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="space-y-5">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="space-y-2">
              <FieldLabel
                htmlFor="login-form-email"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </FieldLabel>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  {...field}
                  id="login-form-email"
                  type="text"
                  required
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  className={`pl-10 transition-all duration-200 ${
                    fieldState.invalid
                      ? "border-red-300 dark:border-red-700 focus:border-red-500 focus:ring-red-500"
                      : "focus:border-blue-500 focus:ring-blue-500"
                  }`}
                />
              </div>
              <CustomFieldError error={fieldState.error} />
            </div>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="space-y-2">
              <FieldLabel
                htmlFor="login-form-password"
                className="text-sm font-medium"
              >
                Password
              </FieldLabel>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
                <Input
                  {...field}
                  id="login-form-password"
                  type={showPassword ? "text" : "password"}
                  required
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className={`pl-10 pr-12 transition-all duration-200 ${
                    fieldState.invalid
                      ? "border-red-300 dark:border-red-700 focus:border-red-500 focus:ring-red-500"
                      : "focus:border-blue-500 focus:ring-blue-500"
                  }`}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-4 w-4 text-gray-500" /> : <Eye className="h-4 w-4 text-gray-500" />}
                </Button>
              </div>
              <CustomFieldError error={fieldState.error} />
            </div>
          )}
        />
      </div>

      <Button
        type="submit"
        className="w-full h-11 text-base font-medium"
        disabled={loginMutationIsPending}
      >
        {loginMutationIsPending ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Signing in...
          </div>
        ) : (
          "Sign in"
        )}
      </Button>
    </form>
  );
};

const LoginPage = () => {
  return (
    <LoginPageGuard>
      <main className="flex items-center justify-center min-h-screen p-4 scroll-gutter-stable">
        <Card className="w-full max-w-md shadow-xl rounded-2xl">
          <CardHeader className="pb-8">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="relative w-20 h-20 p-3 rounded-2xl">
                <img
                  src="/scit-logo/light.png"
                  alt="logo-light"
                  className="block dark:hidden w-full h-full object-contain"
                />
                <img
                  src="/scit-logo/dark.png"
                  alt="logo-dark"
                  className="hidden dark:block w-full h-full object-contain"
                />
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
                <p className="text-sm text-muted-foreground">Sign in to your account to continue</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <LoginForm />
          </CardContent>
        </Card>
      </main>
    </LoginPageGuard>
  );
};

export default LoginPage;
