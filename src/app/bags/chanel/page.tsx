import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

export default function ChanelBagsPage() {
  // 샘플 제품 데이터
  const products = [
    {
      id: "ch-001",
      name: "클래식 플랩백 미디엄",
      brand: "샤넬",
      price: 9850000,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "샤넬 클래식 플랩백 미디엄"
    },
    {
      id: "ch-002",
      name: "보이 샤넬 스몰",
      brand: "샤넬",
      price: 8200000,
      imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "샤넬 보이 샤넬 스몰",
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
              alt="샤넬 로고"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <Typography variant="h1" className="text-3xl font-medium mb-4">
              샤넬 (Chanel)
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              1910년 프랑스에서 가브리엘 '코코' 샤넬이 설립한 샤넬은 현대 여성 패션의 혁명을 일으킨 럭셔리 브랜드입니다.
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              시그니처 퀼팅 패턴과 CC 로고, 체인 스트랩으로 유명한 샤넬 가방은 럭셔리 패션의 상징이 되었습니다. 특히 클래식 플랩백은 시대를 초월한 디자인과 투자 가치로 많은 사랑을 받고 있습니다. 우아함과 세련미, 그리고 시대를 초월한 스타일을 추구하는 브랜드입니다.
            </Typography>
          </div>
        </div>
        
        <ProductList 
          title="샤넬 가방 컬렉션"
          products={products}
          viewType="grid"
        />
      </div>
    </MainTemplate>
  );
} 