/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-soft": "var(--color-primary-soft)",
        secondary: "var(--color-secondary)",
        "secondary-light": "var(--color-secondary-light)",
        "secondary-dark": "var(--color-secondary-dark)",
        "secondary-soft": "var(--color-secondary-soft)",
        bg: "var(--color-bg)",
        "bg-2": "var(--color-bg-2)",
        "bg-3": "var(--color-bg-3)",
        text: {
          primary: "var(--text-1)",
          secondary: "var(--text-2)",
          tertiary: "var(--text-3)",
        },
        border: "var(--border)",
        "border-focus": "var(--border-focus)",
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
        "accent-soft": "var(--accent-soft)",
      },
      borderRadius: {
        card: "12px",
        button: "8px",
        input: "8px",
      },
      boxShadow: {
        low: "0 1px 2px rgba(0,0,0,.08)",
        medium: "0 2px 4px rgba(0,0,0,.12)",
        high: "0 4px 8px rgba(0,0,0,.16)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif",
        ],
      },
    },
  },
};


