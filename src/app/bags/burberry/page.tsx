import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

export default function BurberryBagsPage() {
  // 샘플 제품 데이터
  const products = [
    {
      id: "bb-001",
      name: "미디엄 체크 패턴 토트백",
      brand: "버버리",
      price: 2450000,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "버버리 미디엄 체크 패턴 토트백"
    },
    {
      id: "bb-002",
      name: "빈티지 체크 크로스바디백",
      brand: "버버리",
      price: 1850000,
      imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "버버리 빈티지 체크 크로스바디백",
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
              alt="버버리 로고"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <Typography variant="h1" className="text-3xl font-medium mb-4">
              버버리 (Burberry)
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              1856년 영국에서 설립된 버버리는 영국의 헤리티지와 혁신을 대표하는 럭셔리 패션 브랜드입니다.
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              시그니처 체크 패턴과 트렌치코트로 유명하며, 전통적인 영국 스타일에 현대적인 감각을 더한 디자인이 특징입니다. 버버리의 가방 컬렉션은 실용성과 세련된 디자인을 겸비하여 일상부터 특별한 자리까지 다양한 상황에 어울립니다.
            </Typography>
          </div>
        </div>
        
        <ProductList 
          title="버버리 가방 컬렉션"
          products={products}
          viewType="grid"
        />
      </div>
    </MainTemplate>
  );
} 