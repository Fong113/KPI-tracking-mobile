/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        "xl": "1200px"
      },
    },
    extend: {
      colors: {
        primary: {
          default: "rbga(var(--primary-600))",
          900: "rgba(var(--primary-900))",
          800: "rgba(var(--primary-800))",
          700: "rgba(var(--primary-700))",
          600: "rgba(var(--primary-600))",
        },
        accent: {
          default: "rgba(var(--accent-800))",
          900: "rgba(var(--accent-900))",
          700: "rgba(var(--accent-700))",
          500: "rgba(var(--accent-500))",
        },
        success: {
          default: "rgba(var(--success-700))",
          900: "rgba(var(--success-900))",
          800: "rgba(var(--success-800))",
          600: "rgba(var(--success-600))",
          500: "rgba(var(--success-500))",
        },
        warning: {
          default: "rgba(var(--warning-700))",
          900: "rgba(var(--warning-900))",
          800: "rgba(var(--warning-800))",
          600: "rgba(var(--warning-600))",
          500: "rgba(var(--warning-500))",
        },
        error: {
          default: "rgba(var(--error-700))",
          900: "rgba(var(--error-900))",
          800: "rgba(var(--error-800))",
          600: "rgba(var(--error-600))",
          500: "rgba(var(--error-500))",
        },
        text: {
          default: "rgba(var(--text-base))",
        },
        border: {
          inpur: "rgba(var(--border-input))",
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}