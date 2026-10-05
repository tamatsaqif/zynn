import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F8",
        foreground: "#1A191E",
        pearl: {
          50: "#FCFBF9",
          100: "#FAF9F8",
          200: "#F4F1EC",
          300: "#ECE7DE",
        },
        twilight: {
          50: "#FAF7FD",
          100: "#F3EEF8",
          200: "#E9DFFA",
          300: "#D8C7F5",
          muted: "#6B667B",
        },
        gold: {
          100: "#FDF9EE",
          200: "#F9EFD2",
          300: "#F3DC9B",
          400: "#E6C568",
          500: "#D4AF37",
          600: "#B88E1C",
          700: "#916D0E",
          800: "#6E500A",
        },
      },
      backgroundImage: {
        "gold-shimmer": "linear-gradient(135deg, #FBF4DE 0%, #DFBD5D 50%, #B88E1C 100%)",
        "gold-border": "linear-gradient(135deg, rgba(220,185,90,0.5), rgba(255,255,255,0.9), rgba(220,185,90,0.3))",
        "twilight-aura": "radial-gradient(ellipse at top, rgba(238, 226, 250, 0.6) 0%, rgba(255, 248, 235, 0.4) 45%, rgba(250, 249, 248, 0.9) 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px -5px rgba(212, 175, 55, 0.25)",
        "gold-glow-lg": "0 0 40px -5px rgba(212, 175, 55, 0.35)",
        "subtle-card": "0 10px 30px -10px rgba(180, 150, 80, 0.08)",
        "subtle-card-hover": "0 20px 40px -12px rgba(180, 150, 80, 0.16)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
