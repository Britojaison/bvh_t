import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1a5276",
        "primary-blue-light": "#2980b9",
        "accent-orange": "#f58634",
        "accent-orange-light": "#f7a05a",
        "bg-light": "#f0f6fb",
        "bg-card": "#e8f0f8",
        "text-dark": "#1a1a2e",
        "text-muted": "#555555",
      },
      fontFamily: {
        heading: ["var(--font-libre-baskerville)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
