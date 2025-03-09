"use client";

import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outlined" | "text";
  size?: "small" | "medium" | "large" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  className = "",
  type = "button",
}) => {
  // 버튼 스타일 매핑 - 직접 색상 값 사용
  const variantStyles = {
    primary: `bg-primary-main text-white hover:bg-primary-dark`,
    secondary: `bg-secondary-main text-white hover:bg-secondary-dark`,
    outlined: `border border-primary-main text-primary-main hover:bg-primary-light`,
    text: `text-primary-main hover:bg-primary-light`,
  };

  // 버튼 크기 매핑 - "lg"를 "large"와 동일하게 처리
  const sizeStyles = {
    small: `py-1 px-2 text-sm`,
    medium: `py-2 px-4 text-base`,
    large: `py-3 px-6 text-lg`,
    lg: `py-3 px-6 text-lg`,
  };

  const baseStyles = `
    inline-flex items-center justify-center
    font-medium
    rounded-md
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-main
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${fullWidth ? "w-full" : ""}
  `;

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
