"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Typography } from "@/components/atoms/Typography";
import { ProductCard } from "@/components/molecules/ProductCard/ProductCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Product {
  id: string;
  name?: string;
  title?: string;
  brand: string;
  price: number;
  discountRate?: number;
  originalPrice?: number;
  imageUrl: string;
  imageAlt?: string;
  isNew?: boolean;
  isBest?: boolean;
  isSale?: boolean;
}

interface ProductListProps {
  category?: string;
  subcategory?: string;
  brand?: string;
  isOnSale?: boolean;
  title?: string;
  description?: string;
  products?: Product[];
  viewType?: "grid" | "scroll";
  viewMoreLink?: string;
}

export const ProductList: React.FC<ProductListProps> = ({
  title,
  description,
  products,
  viewType = "scroll",
  viewMoreLink,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: -containerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: containerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <Typography variant="h2" className="text-2xl font-medium mb-2">
              {title}
            </Typography>
            {description && (
              <Typography variant="body1" color="secondary">
                {description}
              </Typography>
            )}
          </div>

          {viewType === "scroll"
            ? viewMoreLink && (
                <Link
                  href={viewMoreLink}
                  className="text-sm text-gray-600 hover:text-black underline"
                >
                  더 보기
                </Link>
              )
            : viewMoreLink && (
                <Link
                  href={viewMoreLink}
                  className="text-sm text-gray-600 hover:text-black underline"
                >
                  더 보기
                </Link>
              )}
        </div>

        {viewType === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="이전 상품 보기"
            >
              <FiChevronLeft size={24} />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 px-10"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {products?.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-64">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="다음 상품 보기"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
