import posthog from "posthog-js";

if (process.env.NODE_ENV === "production") {
  const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!POSTHOG_KEY || !POSTHOG_HOST) {
    console.error("Missing PostHog configuration in production environment");
  } else {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
    });
  }
}
