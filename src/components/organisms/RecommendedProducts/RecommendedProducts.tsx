import React from "react";
import { Typography } from "@/components/atoms/Typography";
import { ProductCard } from "@/components/molecules/ProductCard/ProductCard";

interface ProductCardData {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  imageAlt: string;
  isSale?: boolean;
}

interface RecommendedProductsProps {
  title: string;
  products: ProductCardData[];
}

export const RecommendedProducts: React.FC<RecommendedProductsProps> = ({
  title,
  products,
}) => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Typography variant="h4" className="mb-8 text-center">
          {title}
        </Typography>
        <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
