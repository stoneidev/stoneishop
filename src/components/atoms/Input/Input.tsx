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
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  variant,
  size,
  rounded,
  className,
  icon,
  ...props
}) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
          {icon}
        </div>
      )}
      <div className="w-full">
        {label && (
          <label className="mb-1 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          className={`${inputVariants({
            variant: error ? "error" : variant,
            size,
            rounded,
            className,
          })} ${icon ? "pl-10" : ""}`}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-error">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-xs text-gray-500">{helperText}</p>
        )}
      </div>
    </div>
  );
};
