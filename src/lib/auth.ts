import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [nextCookies()],
  trustedOrigins: ["http://localhost:3000", "https://demo-web-scit.ahmadzidni.my.id"],
  emailAndPassword: {
    enabled: true,
  },
});
