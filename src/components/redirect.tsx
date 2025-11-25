"use client";

import { redirect, RedirectType } from "next/navigation";

interface RedirectProps {
  to: string;
  type?: RedirectType;
}

export const Redirect = ({ to, type }: RedirectProps) => {
  redirect(to, type);
};
