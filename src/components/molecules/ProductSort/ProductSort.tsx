"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Typography } from "@/components/atoms/Typography";

type SortOption = {
  id: string;
  label: string;
};

type ProductSortProps = {
  options: SortOption[];
  defaultOption?: string;
  onSortChange: (sortId: string) => void;
};

export const ProductSort: React.FC<ProductSortProps> = ({
  options,
  defaultOption = options[0]?.id,
  onSortChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.id === defaultOption) || options[0]
  );

  const handleSelect = (option: SortOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSortChange(option.id);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 border-b border-gray-300 pb-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography variant="body2" className="font-medium">
          정렬: {selectedOption.label}
        </Typography>
        <FiChevronDown className="text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-10 mt-1 w-48 rounded-none border border-gray-200 bg-white shadow-md">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.id}
                className={`block w-full px-4 py-2 text-left text-sm ${
                  selectedOption.id === option.id
                    ? "bg-gray-100 font-medium"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 