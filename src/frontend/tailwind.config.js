import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        subtle: "0 2px 8px rgba(139,94,60,0.12), 0 1px 3px rgba(139,94,60,0.08)",
        elevated: "0 8px 32px rgba(139,94,60,0.20), 0 2px 8px rgba(139,94,60,0.10)",
        luxury: "0 16px 64px rgba(139,94,60,0.25), 0 4px 16px rgba(139,94,60,0.12)",
        glow: "0 0 30px rgba(196,149,106,0.4), 0 0 60px rgba(196,149,106,0.2)",
        card: "0 4px 24px rgba(139,94,60,0.12), 0 1px 4px rgba(139,94,60,0.06)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(2deg)" },
          "66%": { transform: "translateY(-8px) rotate(-1deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-25px)" },
        },
        "soft-glow": {
          "0%, 100%": { opacity: "0.4", filter: "blur(1px)" },
          "50%": { opacity: "0.7", filter: "blur(2px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(196,149,106,0.3), 0 0 40px rgba(196,149,106,0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(196,149,106,0.6), 0 0 80px rgba(196,149,106,0.3)" },
        },
        "slide-up": {
          from: { transform: "translateY(40px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "scale-in": {
          from: { transform: "scale(0.9)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "whatsapp-ping": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "soft-glow": "soft-glow 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "whatsapp-ping": "whatsapp-ping 2s ease-in-out infinite",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
