/** @type {import('tailwindcss').Config} */
const { colors, typography, spacing, borders, shadows, zIndices } = require('./src/styles/designTokens');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      // Tailwind의 기본 색상 대신 우리의 디자인 토큰 색상 사용
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      // 브랜드 색상 추가
      brand: colors.brand,
      // 상태 색상 추가
      error: colors.state.error,
      success: colors.state.success,
      warning: colors.state.warning,
      info: colors.state.info,
    },
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    letterSpacing: typography.letterSpacing,
    borderRadius: borders.radius,
    borderWidth: borders.width,
    boxShadow: shadows,
    spacing: spacing,
    zIndex: zIndices,
    extend: {},
  },
  plugins: [],
}; 