import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { TRPCError } from "@trpc/server";
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(async (opts) => {
      const data = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(`hello ${opts.input.text}`);
        }, 1000);
      });

      return {
        greeting: data,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
