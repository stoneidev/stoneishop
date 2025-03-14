import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";

export default function WomenDesignersPage() {
  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-8">
        <Typography variant="h1" className="text-3xl font-medium mb-6">
          여성 디자이너
        </Typography>
        <Typography variant="body1" className="text-gray-600 mb-8">
          세계적인 명품 브랜드의 여성 디자이너 컬렉션을 만나보세요.
        </Typography>
        
        <ProductList 
          category="women"
          subcategory="designers"
        />
      </div>
    </MainTemplate>
  );
} 