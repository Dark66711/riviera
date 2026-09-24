import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        riviera: {
          turquoise: "#55B7B2",
          turquoiseDark: "#277F7B",
          aqua: "#173B3A",
          mint: "#1C2222",
          warm: "#F3F0E9",
          charcoal: "#101414",
          graphite: "#292E2E",
          wood: "#B18A55",
          coral: "#C56732"
        }
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0, 0, 0, 0.42)",
        lift: "0 18px 38px rgba(177, 138, 85, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
