"use client";
// <-- hooks can only be used in client components
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export function ClientGreeting() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>Internal Server Error</div>}>
        <ClientGreetingSuspense />
      </ErrorBoundary>
    </Suspense>
  );
}

export function ClientGreetingSuspense() {
  const [greeting] = trpc.hello.useSuspenseQuery({
    text: "from the server",
  });
  return <div>{greeting.greeting}</div>;
}
