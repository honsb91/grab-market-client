export const API_URL =
  process.env.NODE_ENV === "production"
    ? "http://honsb-market-server-real.fly.dev"
    : "http://localhost:8080";
