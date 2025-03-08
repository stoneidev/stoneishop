"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-brand-primary text-white hover:bg-gray-800",
        secondary: "bg-white text-brand-primary border border-brand-primary hover:bg-gray-50",
        outline: "bg-transparent text-brand-primary border border-gray-300 hover:bg-gray-50",
        ghost: "bg-transparent text-brand-primary hover:bg-gray-50",
        link: "bg-transparent text-brand-primary underline-offset-4 hover:underline",
        accent: "bg-brand-accent text-white hover:opacity-90",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "none",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  rounded,
  fullWidth,
  className,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ variant, size, rounded, fullWidth, className })}
      {...props}
    >
      {children}
    </button>
  );
};
