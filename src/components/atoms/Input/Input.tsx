"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "w-full border px-3 py-2 transition-colors focus:outline-none placeholder:text-gray-600",
  {
    variants: {
      variant: {
        default: "border-gray-300 focus:border-brand-primary",
        error: "border-error focus:border-error",
        success: "border-success focus:border-success",
      },
      size: {
        sm: "h-9 text-xs",
        md: "h-10 text-sm",
        lg: "h-12 text-base",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "none",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  variant,
  size,
  rounded,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={inputVariants({
          variant: error ? "error" : variant,
          size,
          rounded,
          className,
        })}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-error">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
    </div>
  );
};
