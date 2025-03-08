import React from "react";

interface SizeButtonProps {
  size: string;
  isSelected: boolean;
  onClick: () => void;
}

export const SizeButton: React.FC<SizeButtonProps> = ({
  size,
  isSelected,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`border py-2 text-center text-sm ${
        isSelected
          ? "border-black bg-black text-white"
          : "border-gray-300 hover:border-gray-900"
      }`}
      onClick={onClick}
    >
      {size}
    </button>
  );
}; 