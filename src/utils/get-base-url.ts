export const getBaseURL = (): string => {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!baseURL) {
    throw new Error("Environment variable NEXT_PUBLIC_BACKEND_URL is not defined");
  }

  return baseURL;
};
