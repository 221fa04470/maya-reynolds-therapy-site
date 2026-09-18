import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#F5F2EA",
        surface: "#ECE6D9",
        pine: {
          DEFAULT: "#2F4538",
          dark: "#243328",
          deep: "#1D2B22",
        },
        walnut: "#8B6F47",
        gold: "#C9A25D",
        ink: {
          DEFAULT: "#262624",
          soft: "#5B584F",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      letterSpacing: {
        wide2: "0.08em",
      },
    },
  },
  plugins: [],
};
export default config;
