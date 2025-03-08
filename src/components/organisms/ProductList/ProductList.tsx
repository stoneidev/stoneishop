"use client";

import React from "react";
import Link from "next/link";
import { Typography } from "@/components/atoms/Typography";
import { ProductCard, ProductCardProps } from "@/components/molecules/ProductCard/ProductCard";

interface ProductListProps {
  title: string;
  products: ProductCardProps[];
  viewMoreLink?: string;
}

export const ProductList: React.FC<ProductListProps> = ({
  title,
  products,
  viewMoreLink,
}) => {
  return (
    <section className="py-12">
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h2" className="text-2xl font-medium">
          {title}
        </Typography>
        {viewMoreLink && (
          <Link
            href={viewMoreLink}
            className="text-sm font-light text-gray-600 underline hover:text-black"
          >
            더 보기
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}; 