import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

export default function DiorBagsPage() {
  // 샘플 제품 데이터
  const products = [
    {
      id: "di-001",
      name: "레이디 디올 미디엄",
      brand: "디올",
      price: 6500000,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "디올 레이디 디올 미디엄"
    },
    {
      id: "di-002",
      name: "디올 새들백",
      brand: "디올",
      price: 4800000,
      imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "디올 새들백",
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
              alt="디올 로고"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <Typography variant="h1" className="text-3xl font-medium mb-4">
              디올 (Dior)
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              1946년 프랑스에서 크리스찬 디올이 설립한 디올은 우아함과 여성미를 상징하는 럭셔리 패션 하우스입니다.
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              정교한 디테일과 장인 정신이 돋보이는 디올의 가방은 패션 아이콘으로 자리 잡았습니다. 특히 레이디 디올, 새들백, 디올 북 토트 등은 시대를 초월한 디자인과 높은 품질로 많은 사랑을 받고 있습니다. 클래식한 우아함과 현대적인 감각이 조화를 이루는 브랜드입니다.
            </Typography>
          </div>
        </div>
        
        <ProductList 
          title="디올 가방 컬렉션"
          products={products}
          viewType="grid"
        />
      </div>
    </MainTemplate>
  );
} 