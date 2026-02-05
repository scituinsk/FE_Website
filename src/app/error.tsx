"use client";

import ErrorStateUi from "@/components/error-state-ui";

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ErrorStateUi
        onRetry={() => {
          window.location.reload();
        }}
      />
    </div>
  );
}
