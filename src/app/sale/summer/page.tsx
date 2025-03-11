import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";

export default function SummerSalePage() {
  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-8">
        <Typography variant="h1" className="text-3xl font-medium mb-6">
          여름 세일
        </Typography>
        <Typography variant="body1" className="text-gray-600 mb-8">
          시원한 여름을 위한 특별 할인 상품을 만나보세요.
        </Typography>
        
        <ProductList 
          category="sale"
          subcategory="summer"
          isOnSale={true}
        />
      </div>
    </MainTemplate>
  );
} 