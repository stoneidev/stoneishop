"use client";

import React, { useState } from "react";
import { EventPageTemplate } from "@/components/templates/EventPageTemplate/EventPageTemplate";
import { EventBanner } from "@/components/organisms/EventBanner/EventBanner";
import { EventDescription } from "@/components/molecules/EventDescription/EventDescription";
import { ProductSection } from "@/components/organisms/ProductSection/ProductSection";
import { PromotionBanner } from "@/components/organisms/PromotionBanner/PromotionBanner";

// 필터 카테고리 데이터
const filterCategories = [
  {
    name: "카테고리",
    options: [
      { id: "bags", label: "가방", count: 28 },
      { id: "shoes", label: "신발", count: 24 },
      { id: "clothing", label: "의류", count: 32 },
      { id: "accessories", label: "액세서리", count: 18 },
      { id: "jewelry", label: "주얼리", count: 15 },
    ],
  },
  {
    name: "브랜드",
    options: [
      { id: "hermes", label: "에르메스", count: 12 },
      { id: "chanel", label: "샤넬", count: 15 },
      { id: "louisvuitton", label: "루이비통", count: 14 },
      { id: "gucci", label: "구찌", count: 10 },
      { id: "prada", label: "프라다", count: 8 },
      { id: "dior", label: "디올", count: 9 },
    ],
  },
  {
    name: "가격대",
    options: [
      { id: "under300", label: "300만원 이하", count: 15 },
      { id: "300to500", label: "300만원 - 500만원", count: 22 },
      { id: "500to1000", label: "500만원 - 1000만원", count: 18 },
      { id: "over1000", label: "1000만원 이상", count: 12 },
    ],
  },
  {
    name: "색상",
    options: [
      { id: "black", label: "블랙", count: 25 },
      { id: "white", label: "화이트", count: 18 },
      { id: "beige", label: "베이지", count: 15 },
      { id: "brown", label: "브라운", count: 12 },
      { id: "red", label: "레드", count: 8 },
      { id: "blue", label: "블루", count: 10 },
    ],
  },
];

// 정렬 옵션
const sortOptions = [
  { id: "newest", label: "신상품순" },
  { id: "price_asc", label: "가격 낮은순" },
  { id: "price_desc", label: "가격 높은순" },
  { id: "popularity", label: "인기순" },
];

// 럭셔리 상품 데이터
const luxuryProducts = [
  {
    id: "1",
    name: "버킨 30 토고 가죽 핸드백",
    brand: "Hermès",
    price: 18500000,
    imageUrl:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "버킨 30 토고 가죽 핸드백",
  },
  {
    id: "2",
    name: "클래식 플랩백 캐비어 스킨",
    brand: "Chanel",
    price: 12800000,
    imageUrl:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "클래식 플랩백 캐비어 스킨",
  },
  {
    id: "3",
    name: "네버풀 MM 모노그램 캔버스",
    brand: "Louis Vuitton",
    price: 2450000,
    imageUrl:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "네버풀 MM 모노그램 캔버스",
  },
  {
    id: "4",
    name: "디올 새들 가방 오블리크 캔버스",
    brand: "Dior",
    price: 5200000,
    imageUrl:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "디올 새들 가방 오블리크 캔버스",
  },
  {
    id: "5",
    name: "GG 마몬트 미니 탑 핸들백",
    brand: "Gucci",
    price: 3850000,
    imageUrl:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "GG 마몬트 미니 탑 핸들백",
  },
  {
    id: "6",
    name: "갤러리아 프라다 가죽 토트백",
    brand: "Prada",
    price: 4200000,
    imageUrl:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "갤러리아 프라다 가죽 토트백",
  },
  {
    id: "7",
    name: "로고 플레이트 레더 로퍼",
    brand: "Prada",
    price: 1350000,
    imageUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "로고 플레이트 레더 로퍼",
  },
  {
    id: "8",
    name: "프린스타운 가죽 슬리퍼",
    brand: "Gucci",
    price: 1250000,
    imageUrl:
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "프린스타운 가죽 슬리퍼",
  },
  {
    id: "9",
    name: "J'adior 슬링백 펌프스",
    brand: "Dior",
    price: 1450000,
    imageUrl:
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "J'adior 슬링백 펌프스",
  },
  {
    id: "10",
    name: "캐시미어 오버사이즈 코트",
    brand: "Max Mara",
    price: 4800000,
    imageUrl:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "캐시미어 오버사이즈 코트",
  },
  {
    id: "11",
    name: "모노그램 데님 재킷",
    brand: "Louis Vuitton",
    price: 3200000,
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "모노그램 데님 재킷",
  },
  {
    id: "12",
    name: "GG 마몬트 벨트",
    brand: "Gucci",
    price: 750000,
    imageUrl:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "GG 마몬트 벨트",
  },
];

export default function LuxuryEventPage() {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>(
    {}
  );
  const [currentSort, setCurrentSort] = useState("newest");

  const handleFilterChange = (category: string, value: string[]) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleSortChange = (sortId: string) => {
    setCurrentSort(sortId);
  };

  // 상품 목록 부분에서 필터링 로직 추가
  const filteredProducts = luxuryProducts.filter((product) => {
    // 활성화된 필터가 없으면 모든 상품 표시
    if (Object.keys(activeFilters).length === 0) return true;

    // 각 필터 카테고리별로 검사
    return Object.entries(activeFilters).every(([category, values]) => {
      // 해당 카테고리에 선택된 필터가 없으면 통과
      if (values.length === 0) return true;

      // 카테고리별 필터링 로직
      switch (category) {
        case "카테고리":
          // 카테고리 필터링 로직 (예시)
          return values.some((value) =>
            product.name.toLowerCase().includes(value.toLowerCase())
          );
        case "브랜드":
          return values.some((value) =>
            product.brand.toLowerCase().includes(value.toLowerCase())
          );
        case "가격대":
          // 가격대 필터링 로직 (예시)
          if (values.includes("under300") && product.price < 3000000)
            return true;
          if (
            values.includes("300to500") &&
            product.price >= 3000000 &&
            product.price < 5000000
          )
            return true;
          // 다른 가격대 조건들...
          return false;
        default:
          return true;
      }
    });
  });

  // 필터링 로직 다음에 정렬 로직 추가
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (currentSort) {
      case "price_asc":
        return a.price - b.price;
      case "price_desc":
        return b.price - a.price;
      case "popularity":
        // 인기도 정렬 로직 (예시)
        return 0; // 실제 구현 필요
      case "newest":
      default:
        return 0; // 기본값은 원래 순서 유지
    }
  });

  return (
    <EventPageTemplate>
      <EventBanner
        imageUrl="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
        title="명품 브랜드 기획전"
        subtitle="세계적인 럭셔리 브랜드의 아이코닉한 컬렉션을 만나보세요"
        altText="명품 브랜드 기획전"
      />

      <EventDescription
        title="타임리스 럭셔리 컬렉션"
        description="시간이 지나도 변치 않는 가치를 지닌 명품 브랜드의 아이코닉한 아이템들을 소개합니다. 에르메스, 샤넬, 루이비통 등 세계적인 럭셔리 브랜드의 시그니처 제품들을 스토니에서 만나보세요."
      />

      <ProductSection
        products={sortedProducts}
        filterCategories={filterCategories}
        sortOptions={sortOptions}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />

      <PromotionBanner
        title="명품 관리 가이드"
        description="소중한 명품 아이템을 오래도록 아름답게 유지하는 방법을 알려드립니다. 스토니의 전문가가 제안하는 명품 관리 팁을 확인해보세요."
        buttonText="관리 가이드 보기"
        imageUrl="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop"
        imageAlt="명품 관리 가이드"
      />
    </EventPageTemplate>
  );
}
