import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 10,
}) => {
  return (
    <div className="flex h-10 w-32">
      <button
        type="button"
        className="flex w-10 items-center justify-center border border-r-0 border-gray-300 disabled:opacity-50"
        onClick={onDecrease}
        disabled={quantity <= min}
      >
        -
      </button>
      <div className="flex w-12 items-center justify-center border-t border-b border-gray-300">
        {quantity}
      </div>
      <button
        type="button"
        className="flex w-10 items-center justify-center border border-l-0 border-gray-300 disabled:opacity-50"
        onClick={onIncrease}
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
}; 