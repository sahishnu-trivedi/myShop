/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./index.html",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
      },
      screens: {
        "2xl": "1920px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#57D6E7",
          foreground: "#57D6E7",
        },
        secondary: {
          DEFAULT: "#FF67A4",
          foreground: "#FF67A4",
        },
        tertiary: {
          DEFAULT: "#FFBBD6",
          foreground: "#FFBBD6",
        },
        black: {
          DEFAULT: "#000",
          foreground: "#000",
        },
        quad: {
          DEFAULT: "#C8F4FA",
          foreground: "#C8F4FA",
        },
        white: {
          DEFAULT: "#fff",
          foreground: "#fff",
        },
        borderBlack: {
          DEFAULT: "#222",
          foreground: "#222",
        },
        grey: {
          DEFAULT: "#999999",
          foreground: "#999999",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}