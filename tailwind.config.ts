import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(96, 165, 250, 0.22)",
        "card-hover": "0 28px 90px rgba(15, 23, 42, 0.42)"
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at top left, rgba(59,130,246,0.28), transparent 34%), radial-gradient(circle at top right, rgba(168,85,247,0.22), transparent 28%), linear-gradient(135deg, #020617 0%, #08111f 48%, #0f0721 100%)"
      }
    }
  },
  plugins: []
};

export default config;
