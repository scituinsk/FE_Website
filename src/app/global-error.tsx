"use client";

import ErrorStateUi from "@/components/error-state-ui";

export default function GlobalError() {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background text-foreground">
        <ErrorStateUi
          onRetry={() => {
            window.location.reload();
          }}
        />
      </body>
    </html>
  );
}
