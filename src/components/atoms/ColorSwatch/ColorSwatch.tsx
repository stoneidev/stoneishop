import React from "react";

interface ColorSwatchProps {
  color: string;
  isSelected: boolean;
  onClick: () => void;
  name?: string;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
  color,
  isSelected,
  onClick,
  name,
}) => {
  return (
    <button
      type="button"
      className={`relative h-8 w-8 rounded-full ${
        isSelected ? "ring-2 ring-black" : "ring-1 ring-gray-300"
      }`}
      style={{ backgroundColor: color }}
      onClick={onClick}
      aria-label={name ? `색상: ${name}` : "색상 선택"}
      title={name}
    >
      {isSelected && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="h-6 w-6 rounded-full border-2 border-white" />
        </span>
      )}
    </button>
  );
}; 