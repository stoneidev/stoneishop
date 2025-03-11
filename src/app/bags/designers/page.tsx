import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";

export default function DesignerBagsPage() {
  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-8">
        <Typography variant="h1" className="text-3xl font-medium mb-6">
          디자이너 가방
        </Typography>
        <Typography variant="body1" className="text-gray-600 mb-8">
          럭셔리 브랜드의 시그니처 가방 컬렉션을 만나보세요.
        </Typography>

        <ProductList
          category="bags"
          subcategory="designers"
          title="디자이너 가방"
          products={[]}
        />
      </div>
    </MainTemplate>
  );
}
