"use client";

import React, { useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield } from "lucide-react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError(context) {
          toast.error(context.error.message);
        },
        onSuccess() {
          toast.success("Login successful!");
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient - matching homepage style */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/15 rounded-full blur-xl" />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/25 rounded-full blur-xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          {/* Login Card */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl border border-border/20 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex justify-center mb-6"
              >
                <Link
                  href="/"
                  className="flex items-center flex-col transition-opacity hover:opacity-80"
                >
                  {/* Logo Image */}
                  <div className="relative size-20 flex-shrink-0">
                    <Image
                      src="/logo-scit.png"
                      alt="SCIT Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* Text Group */}
                  <div className="flex flex-col">
                    <span className="text-xl font-bold leading-tight text-slate-900">SCIT</span>
                    <span className="text-xs font-normal leading-tight text-slate-600">Study Club Informatika</span>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h1>
                <p className="text-slate-600">Silahkan Login untuk mengelola konten</p>
              </motion.div>

              {/* Security badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium mt-4"
              >
                <Shield className="h-3 w-3" />
                Secure Login
              </motion.div>
            </div>

            {/* Login Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-slate-600">Remember me</span>
                </label>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-12 text-base font-medium"
                size="lg"
              >
                Sign In
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.form>

            {/* Footer */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-8 pt-6 border-t border-slate-100"
            >
              <p className="text-sm text-slate-600">
                Don't have an account?{" "}
                <Link
                  href="/join"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Join SCIT
                </Link>
              </p>
            </motion.div> */}
            {/* Back to Home */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-center mt-6"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-800 transition-colors"
              >
                ← Back to Home
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
