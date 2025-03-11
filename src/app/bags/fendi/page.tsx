import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

export default function FendiBagsPage() {
  // 샘플 제품 데이터
  const products = [
    {
      id: "fe-001",
      name: "피카부 미디엄",
      brand: "펜디",
      price: 5200000,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "펜디 피카부 미디엄",
      isNew: true
    },
    {
      id: "fe-002",
      name: "바게트 미디엄",
      brand: "펜디",
      price: 4300000,
      imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "펜디 바게트 미디엄"
    }
  ];

  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="https://images.unsplash.com/photo-1621784562807-14b5d7a37e0a?q=80&w=1000&auto=format&fit=crop"
              alt="펜디 로고"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <Typography variant="h1" className="text-3xl font-medium mb-4">
              펜디 (Fendi)
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              1925년 이탈리아 로마에서 설립된 펜디는 혁신적인 디자인과 장인 정신으로 유명한 럭셔리 패션 브랜드입니다.
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              시그니처 FF 로고와 독특한 디자인으로 유명한 펜디의 가방은 패션 아이콘으로 자리 잡았습니다. 특히 바게트, 피카부, 피카부 등의 가방은 독창적인 디자인과 뛰어난 품질로 많은 사랑을 받고 있습니다. 전통적인 장인 정신과 현대적인 감각이 조화를 이루는 브랜드입니다.
            </Typography>
          </div>
        </div>
        
        <ProductList 
          title="펜디 가방 컬렉션"
          products={products}
          viewType="grid"
        />
      </div>
    </MainTemplate>
  );
} 