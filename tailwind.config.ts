import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{mdx,md}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "rgb(var(--color-base) / <alpha-value>)",
          soft: "rgb(var(--color-base-soft) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
          raised: "rgb(var(--color-surface-raised) / <alpha-value>)",
          hover: "rgb(var(--color-surface-hover) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgb(var(--color-border) / <alpha-value>)",
          soft: "rgb(var(--color-border-soft) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
          muted: "rgb(var(--color-ink-muted) / <alpha-value>)",
          faint: "rgb(var(--color-ink-faint) / <alpha-value>)",
        },
        signal: {
          DEFAULT: "rgb(var(--color-signal) / <alpha-value>)",
          dim: "rgb(var(--color-signal-dim) / <alpha-value>)",
          glow: "rgb(var(--color-signal-glow) / <alpha-value>)",
        },
        amber: {
          DEFAULT: "rgb(var(--color-amber) / <alpha-value>)",
        },
        risk: {
          critical: "rgb(var(--color-risk-critical) / <alpha-value>)",
          high: "rgb(var(--color-risk-high) / <alpha-value>)",
          medium: "rgb(var(--color-risk-medium) / <alpha-value>)",
          low: "rgb(var(--color-risk-low) / <alpha-value>)",
          info: "rgb(var(--color-risk-info) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-map":
          "radial-gradient(circle at 1px 1px, rgb(var(--color-grid) / 0.045) 1px, transparent 0)",
        "signal-radial":
          "radial-gradient(circle at 50% 0%, rgb(var(--color-signal) / 0.16), transparent 60%)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
      boxShadow: {
        card: "0 1px 0 0 rgb(var(--color-shadow-highlight) / 0.04) inset, 0 20px 40px -24px rgb(var(--color-shadow) / 0.6)",
        glow: "0 0 0 1px rgb(var(--color-signal) / 0.25), 0 0 40px -8px rgb(var(--color-signal) / 0.35)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanline: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 28px" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
        scanline: "scanline 1.4s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
