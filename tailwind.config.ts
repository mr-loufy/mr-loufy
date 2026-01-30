import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#475569",
        accent: "#2563eb",
        bg: "#f8fafc",
      },
    },
  },
  plugins: [],
}

export default config