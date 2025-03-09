/** @type {import('tailwindcss').Config} */
const { colors, typography, spacing, shadows } = require("./src/styles/tokens");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.primary.light,
          main: colors.primary.main,
          dark: colors.primary.dark,
          contrastText: colors.primary.contrastText,
        },
        secondary: {
          light: colors.secondary.light,
          main: colors.secondary.main,
          dark: colors.secondary.dark,
          contrastText: colors.secondary.contrastText,
        },
        neutral: colors.neutral,
        semantic: colors.semantic,
        background: colors.background,
        text: colors.text,
        border: colors.border,
      },
      spacing,
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      letterSpacing: typography.letterSpacing,
      boxShadow: shadows,
    },
  },
  plugins: [],
};
