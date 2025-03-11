import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

export default function SaintLaurentBagsPage() {
  // 샘플 제품 데이터
  const products = [
    {
      id: "sl-001",
      name: "생 로랑 루루 미디엄",
      brand: "생 로랑",
      price: 3250000,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "생 로랑 루루 미디엄",
      isNew: true
    },
    {
      id: "sl-002",
      name: "생 로랑 케이트 미디엄",
      brand: "생 로랑",
      price: 3850000,
      imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "생 로랑 케이트 미디엄"
    }
  ];

  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="https://images.unsplash.com/photo-1621784562807-14b5d7a37e0a?q=80&w=1000&auto=format&fit=crop"
              alt="생 로랑 로고"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <Typography variant="h1" className="text-3xl font-medium mb-4">
              생 로랑 (Saint Laurent)
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              1961년 프랑스에서 이브 생 로랑이 설립한 생 로랑은 현대적이고 세련된 럭셔리 패션 브랜드입니다.
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              미니멀하고 세련된 디자인으로 유명한 생 로랑의 가방은 현대적인 럭셔리를 대표합니다. 특히 루루, 케이트, 생 로랑 등의 가방은 심플하면서도 강렬한 디자인으로 많은 사랑을 받고 있습니다. 파리지앵 시크와 록 앤 롤 감성이 조화를 이루는 브랜드입니다.
            </Typography>
          </div>
        </div>
        
        <ProductList 
          title="생 로랑 가방 컬렉션"
          products={products}
          viewType="grid"
        />
      </div>
    </MainTemplate>
  );
} 