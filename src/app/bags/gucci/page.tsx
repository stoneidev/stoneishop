import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

export default function GucciBagsPage() {
  // 샘플 제품 데이터
  const products = [
    {
      id: "gu-001",
      name: "디오니소스 미디엄 숄더백",
      brand: "구찌",
      price: 3950000,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "구찌 디오니소스 미디엄 숄더백"
    },
    {
      id: "gu-002",
      name: "마몬트 미니 크로스바디백",
      brand: "구찌",
      price: 2850000,
      imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "구찌 마몬트 미니 크로스바디백",
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
              alt="구찌 로고"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <Typography variant="h1" className="text-3xl font-medium mb-4">
              구찌 (Gucci)
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              1921년 이탈리아 피렌체에서 설립된 구찌는 혁신적인 디자인과 최고급 품질로 유명한 럭셔리 패션 브랜드입니다.
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              시그니처 GG 로고와 그린-레드-그린 웹 스트라이프로 유명한 구찌의 가방은 패션 아이콘으로 자리 잡았습니다. 특히 디오니소스, 마몬트, 재키 등의 가방은 독창적인 디자인과 뛰어난 품질로 많은 사랑을 받고 있습니다. 전통과 현대를 아우르는 대담하고 화려한 디자인이 특징입니다.
            </Typography>
          </div>
        </div>
        
        <ProductList 
          title="구찌 가방 컬렉션"
          products={products}
          viewType="grid"
        />
      </div>
    </MainTemplate>
  );
} 