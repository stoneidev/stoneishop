"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-serif text-4xl font-light tracking-tight leading-tight text-gray-900",
      h2: "font-serif text-3xl font-light tracking-tight leading-tight text-gray-900",
      h3: "font-serif text-2xl font-light tracking-tight leading-tight text-gray-900",
      h4: "font-serif text-xl font-medium tracking-normal leading-snug text-gray-900",
      h5: "font-sans text-lg font-medium tracking-normal leading-snug text-gray-900",
      h6: "font-sans text-base font-semibold tracking-normal leading-snug text-gray-900",
      subtitle1:
        "font-sans text-lg font-normal tracking-normal leading-relaxed text-gray-800",
      subtitle2:
        "font-sans text-base font-medium tracking-normal leading-relaxed text-gray-800",
      body1:
        "font-sans text-base font-normal tracking-normal leading-relaxed text-gray-800",
      body2:
        "font-sans text-sm font-normal tracking-normal leading-relaxed text-gray-700",
      button:
        "font-sans text-sm font-medium tracking-wide leading-none text-gray-800",
      caption:
        "font-sans text-xs font-normal tracking-normal leading-normal text-gray-600",
      overline:
        "font-sans text-xs font-medium tracking-wider leading-none uppercase text-gray-600",
    },
    color: {
      primary: "text-brand-primary",
      secondary: "text-brand-secondary",
      accent: "text-brand-accent",
      black: "text-black",
      white: "text-white",
      gray: "text-gray-500",
      error: "text-error",
      success: "text-success",
      warning: "text-warning",
      info: "text-info",
    },
  },
  defaultVariants: {
    variant: "body1",
    color: "black",
  },
});

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "black"
    | "white"
    | "gray"
    | "error"
    | "success"
    | "warning"
    | "info"
    | null;
}

export const Typography: React.FC<TypographyProps> = ({
  as: Component = "p",
  variant,
  color,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={typographyVariants({ variant, color, className })}
      {...props}
    >
      {children}
    </Component>
  );
};
