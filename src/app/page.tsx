import { trpc } from "@/trpc/server";
import { HydrateClient } from "@/trpc/server";
import { ClientGreeting } from "./client-greeting";
export default async function Home() {
  void trpc.hello.prefetch({
    text: "from the server",
  });
  return (
    <HydrateClient>
      <ClientGreeting />
    </HydrateClient>
  );
}
