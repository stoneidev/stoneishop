import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";

export default function MensClothingPage() {
  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-8">
        <Typography variant="h1" className="text-3xl font-medium mb-6">
          남성 의류
        </Typography>
        <Typography variant="body1" className="text-gray-600 mb-8">
          세련된 스타일의 남성 의류 컬렉션을 만나보세요.
        </Typography>
        
        <ProductList 
          category="men"
          subcategory="clothing"
        />
      </div>
    </MainTemplate>
  );
} 