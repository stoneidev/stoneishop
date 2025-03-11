import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

export default function ChloeBagsPage() {
  // 샘플 제품 데이터
  const products = [
    {
      id: "cl-001",
      name: "마르시 미디엄 숄더백",
      brand: "클로에",
      price: 2950000,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "클로에 마르시 미디엄 숄더백",
      isNew: true
    },
    {
      id: "cl-002",
      name: "드류 미니 크로스바디백",
      brand: "클로에",
      price: 2350000,
      imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "클로에 드류 미니 크로스바디백"
    }
  ];

  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="https://images.unsplash.com/photo-1621784562807-14b5d7a37e0a?q=80&w=1000&auto=format&fit=crop"
              alt="클로에 로고"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <Typography variant="h1" className="text-3xl font-medium mb-4">
              클로에 (Chloé)
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              1952년 프랑스에서 설립된 클로에는 자유롭고 낭만적인 여성미를 표현하는 럭셔리 패션 브랜드입니다.
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              보헤미안 감성과 페미닌한 디자인으로 유명하며, 클로에의 가방은 부드러운 곡선과 자연스러운 가죽 소재가 특징입니다. 특히 마르시, 드류, 페이 등의 가방은 실용적이면서도 세련된 디자인으로 많은 사랑을 받고 있습니다.
            </Typography>
          </div>
        </div>
        
        <ProductList 
          title="클로에 가방 컬렉션"
          products={products}
          viewType="grid"
        />
      </div>
    </MainTemplate>
  );
} 