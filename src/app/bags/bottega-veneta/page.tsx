import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

export default function BottegaVenetaBagsPage() {
  // 샘플 제품 데이터
  const products = [
    {
      id: "bv-001",
      name: "인트레치아토 카세트 백",
      brand: "보테가 베네타",
      price: 3850000,
      imageUrl:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "보테가 베네타 인트레치아토 카세트 백",
      isNew: true,
    },
    {
      id: "bv-002",
      name: "아르코 토트백",
      brand: "보테가 베네타",
      price: 4200000,
      imageUrl:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "보테가 베네타 아르코 토트백",
    },
  ];

  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="https://images.unsplash.com/photo-1621784562807-14b5d7a37e0a?q=80&w=1000&auto=format&fit=crop"
              alt="보테가 베네타 로고"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <Typography variant="h1" className="text-3xl font-medium mb-4">
              보테가 베네타 (Bottega Veneta)
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              1966년 이탈리아에서 설립된 보테가 베네타는 당신의 이니셜만으로
              충분하다 라는 모토로 로고 없이도 인정받는 럭셔리 브랜드입니다.
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              시그니처 인트레치아토(Intrecciato) 위빙 기법으로 만든 가죽
              제품으로 유명하며, 장인 정신과 최고급 소재를 사용한 미니멀하고
              우아한 디자인이 특징입니다. 현대적인 럭셔리와 전통적인 장인 정신의
              완벽한 조화를 보여주는 브랜드입니다.
            </Typography>
          </div>
        </div>

        <ProductList
          title="보테가 베네타 가방 컬렉션"
          products={products}
          viewType="grid"
        />
      </div>
    </MainTemplate>
  );
}
