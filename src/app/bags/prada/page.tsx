import React from "react";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { ProductList } from "@/components/organisms/ProductList/ProductList";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

export default function PradaBagsPage() {
  // 샘플 제품 데이터
  const products = [
    {
      id: "pr-001",
      name: "사피아노 럭스 토트백",
      brand: "프라다",
      price: 3850000,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "프라다 사피아노 럭스 토트백",
      isNew: true
    },
    {
      id: "pr-002",
      name: "리에디션 2005 나일론 숄더백",
      brand: "프라다",
      price: 2250000,
      imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "프라다 리에디션 2005 나일론 숄더백"
    }
  ];

  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="https://images.unsplash.com/photo-1621784562807-14b5d7a37e0a?q=80&w=1000&auto=format&fit=crop"
              alt="프라다 로고"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <Typography variant="h1" className="text-3xl font-medium mb-4">
              프라다 (Prada)
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-4">
              1913년 이탈리아 밀라노에서 설립된 프라다는 미니멀하고 세련된 디자인으로 유명한 럭셔리 패션 브랜드입니다.
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              혁신적인 소재와 미니멀한 디자인으로 유명한 프라다의 가방은 현대적인 럭셔리를 대표합니다. 특히 사피아노 가죽 제품과 나일론 백팩은 프라다의 아이코닉한 아이템으로 자리 잡았습니다. 지적이고 세련된 미니멀리즘을 추구하는 브랜드입니다.
            </Typography>
          </div>
        </div>
        
        <ProductList 
          title="프라다 가방 컬렉션"
          products={products}
          viewType="grid"
        />
      </div>
    </MainTemplate>
  );
} 