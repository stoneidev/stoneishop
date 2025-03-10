import React from "react";
import { Typography } from "@/components/atoms/Typography";
import { ProductCard } from "@/components/molecules/ProductCard/ProductCard";
import { ProductFilter } from "@/components/molecules/ProductFilter/ProductFilter";
import { ProductSort } from "@/components/molecules/ProductSort/ProductSort";

interface ProductSectionProps {
  products: any[];
  filterCategories: any[];
  sortOptions: any[];
  onFilterChange: (category: string, value: string[]) => void;
  onSortChange: (sortId: string) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  products,
  filterCategories,
  sortOptions,
  onFilterChange,
  onSortChange,
}) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
        {/* 필터 사이드바 */}
        <div className="hidden lg:block">
          <ProductFilter
            categories={filterCategories}
            onFilterChange={onFilterChange}
          />
        </div>

        {/* 상품 목록 */}
        <div className="lg:col-span-3">
          {/* 상품 수 및 정렬 */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <Typography variant="body2" className="text-gray-600">
              총 {products.length}개 상품
            </Typography>
            <ProductSort options={sortOptions} onSortChange={onSortChange} />
          </div>

          {/* 상품 그리드 */}
          <div className="mt-8 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 