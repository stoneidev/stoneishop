import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

export default function LoeweBagsPage() {
  // 샘플 제품 데이터
  const products = [
    {
      id: "lo-001",
      name: "퍼즐 미디엄",
      brand: "로에베",
      price: 4250000,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "로에베 퍼즐 미디엄"
    },
    {
      id: "lo-002",
      name: "해먼드 미디엄",
      brand: "로에베",
      price: 3950000,
      imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "로에베 해먼드 미디엄",
      isNew: true
    }
  ];

  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="https://images.unsplash.com/photo-1621784562807-14b5d7a37e0a?q=80&w=1000&auto=format&fit=crop"
              alt="로에베 로고"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <Typography variant="h1" className="text-3xl font-medium mb-4">
              로에베 (Loewe)
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              1846년 스페인 마드리드에서 설립된 로에베는 장인 정신과 혁신적인 디자인으로 유명한 럭셔리 가죽 브랜드입니다.
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              최고급 가죽 제품과 독창적인 디자인으로 유명한 로에베의 가방은 현대적인 럭셔리를 대표합니다. 특히 퍼즐, 해먼드, 게이트 등의 가방은 독특한 구조와 뛰어난 품질로 많은 사랑을 받고 있습니다. 전통적인 장인 정신과 현대적인 감각이 조화를 이루는 브랜드입니다.
            </Typography>
          </div>
        </div>
        
        <ProductList 
          title="로에베 가방 컬렉션"
          products={products}
          viewType="grid"
        />
      </div>
    </MainTemplate>
  );
} 