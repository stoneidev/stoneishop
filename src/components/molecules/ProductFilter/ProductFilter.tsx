"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";

type FilterCategory = {
  name: string;
  options: { id: string; label: string; count?: number }[];
};

type ProductFilterProps = {
  categories: FilterCategory[];
  onFilterChange: (category: string, value: string[]) => void;
};

export const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  onFilterChange,
}) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    categories.map((cat) => cat.name)
  );
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const toggleFilter = (categoryName: string, optionId: string) => {
    setSelectedFilters((prev) => {
      const currentFilters = prev[categoryName] || [];
      const newFilters = currentFilters.includes(optionId)
        ? currentFilters.filter((id) => id !== optionId)
        : [...currentFilters, optionId];

      const result = {
        ...prev,
        [categoryName]: newFilters,
      };

      // 필터 변경 콜백 호출
      onFilterChange(categoryName, result[categoryName]);

      return result;
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
    categories.forEach((category) => {
      onFilterChange(category.name, []);
    });
  };

  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-2">
        <Typography variant="h5" className="font-medium">
          필터
        </Typography>
        <Button
          variant="text"
          size="small"
          onClick={clearFilters}
          className="text-gray-600 hover:text-black"
        >
          모두 지우기
        </Button>
      </div>

      <div className="mt-4 space-y-4">
        {categories.map((category) => (
          <div key={category.name} className="border-b border-gray-100 pb-4">
            <button
              className="flex w-full items-center justify-between py-2 text-left"
              onClick={() => toggleCategory(category.name)}
            >
              <Typography variant="subtitle2" className="font-medium">
                {category.name}
              </Typography>
              {expandedCategories.includes(category.name) ? (
                <FiChevronUp className="text-gray-500" />
              ) : (
                <FiChevronDown className="text-gray-500" />
              )}
            </button>

            {expandedCategories.includes(category.name) && (
              <div className="mt-2 space-y-1 pl-1">
                {category.options.map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`${category.name}-${option.id}`}
                      checked={(selectedFilters[category.name] || []).includes(
                        option.id
                      )}
                      onChange={() => toggleFilter(category.name, option.id)}
                      className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                    />
                    <label
                      htmlFor={`${category.name}-${option.id}`}
                      className="ml-2 flex items-center justify-between w-full text-sm text-gray-800"
                    >
                      <span>{option.label}</span>
                      {option.count !== undefined && (
                        <span className="text-gray-500 text-xs">
                          ({option.count})
                        </span>
                      )}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
