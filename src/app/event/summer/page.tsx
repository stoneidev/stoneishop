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
      { id: "shoes", label: "신발", count: 24 },
      { id: "sandals", label: "샌들", count: 18 },
      { id: "dresses", label: "드레스", count: 32 },
      { id: "swimwear", label: "수영복", count: 15 },
      { id: "accessories", label: "액세서리", count: 22 },
    ],
  },
  {
    name: "브랜드",
    options: [
      { id: "dolce", label: "돌체앤가바나", count: 12 },
      { id: "fendi", label: "펜디", count: 8 },
      { id: "maria", label: "마리아 루카", count: 6 },
      { id: "gucci", label: "구찌", count: 10 },
      { id: "prada", label: "프라다", count: 7 },
    ],
  },
  {
    name: "가격대",
    options: [
      { id: "under100", label: "10만원 이하", count: 15 },
      { id: "100to300", label: "10만원 - 30만원", count: 22 },
      { id: "300to500", label: "30만원 - 50만원", count: 18 },
      { id: "500to1000", label: "50만원 - 100만원", count: 12 },
      { id: "over1000", label: "100만원 이상", count: 10 },
    ],
  },
  {
    name: "색상",
    options: [
      { id: "white", label: "화이트", count: 20 },
      { id: "beige", label: "베이지", count: 15 },
      { id: "yellow", label: "옐로우", count: 8 },
      { id: "red", label: "레드", count: 12 },
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

// 여름 상품 데이터
const summerProducts = [
  {
    id: "1",
    name: "플로럴 패턴 125MM 웨지 샌들",
    brand: "DOLCE&GABBANA",
    price: 2234000,
    originalPrice: 2674000,
    imageUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "플로럴 패턴 웨지 샌들",
    isSale: true,
  },
  {
    id: "2",
    name: "로즈 에스파드리유 웨지 샌들",
    brand: "DOLCE&GABBANA",
    price: 1767000,
    originalPrice: 2207000,
    imageUrl:
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "로즈 에스파드리유 웨지 샌들",
    isSale: true,
  },
  {
    id: "3",
    name: "짠 소재 슬링백 펌프스",
    brand: "Fendi",
    price: 2599000,
    imageUrl:
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "짠 소재 슬링백 펌프스",
  },
  {
    id: "4",
    name: "엘레오노라 90MM 메탈릭 슬링백 펌프",
    brand: "Maria Luca",
    price: 1113000,
    imageUrl:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "엘레오노라 90MM 메탈릭 슬링백 펌프",
  },
  {
    id: "5",
    name: "크리스탈 장식 새틴 펌프스",
    brand: "Manolo Blahnik",
    price: 1850000,
    imageUrl:
      "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "크리스탈 장식 새틴 펌프스",
  },
  {
    id: "6",
    name: "피치 컬러 레더 스니커즈",
    brand: "Common Projects",
    price: 580000,
    imageUrl:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "피치 컬러 레더 스니커즈",
  },
  {
    id: "7",
    name: "보우 디테일 슬라이드 샌들",
    brand: "Ferragamo",
    price: 890000,
    imageUrl:
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "보우 디테일 슬라이드 샌들",
  },
  {
    id: "8",
    name: "크리스탈 메쉬 슬라이드",
    brand: "Miu Miu",
    price: 1450000,
    imageUrl:
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "크리스탈 메쉬 슬라이드",
  },
  {
    id: "9",
    name: "리넨 스트랩 에스파드리유",
    brand: "Loewe",
    price: 750000,
    imageUrl:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "리넨 스트랩 에스파드리유",
  },
  {
    id: "10",
    name: "플로럴 프린트 미디 드레스",
    brand: "Zimmermann",
    price: 1250000,
    imageUrl:
      "https://images.unsplash.com/photo-1623609163859-ca93c959b5b8?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "플로럴 프린트 미디 드레스",
  },
  {
    id: "11",
    name: "리넨 맥시 드레스",
    brand: "Reformation",
    price: 480000,
    imageUrl:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "리넨 맥시 드레스",
  },
  {
    id: "12",
    name: "스트라이프 비키니 세트",
    brand: "Solid & Striped",
    price: 320000,
    imageUrl:
      "https://images.unsplash.com/photo-1570675079376-2ca5d5f2c35a?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "스트라이프 비키니 세트",
  },
];

export default function SummerEventPage() {
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
  const filteredProducts = summerProducts.filter((product) => {
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
          if (values.includes("under100") && product.price < 1000000)
            return true;
          if (
            values.includes("100to300") &&
            product.price >= 1000000 &&
            product.price < 3000000
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
        imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
        title="여름 신상품 특별 할인"
        subtitle="무더운 여름을 스타일리시하게 보낼 수 있는 특별한 아이템들을 만나보세요"
        altText="여름 신상품 특별 할인"
      />

      <EventDescription
        title="여름 시즌 스페셜 컬렉션"
        description="화사한 컬러와 가벼운 소재로 제작된 여름 시즌 스페셜 컬렉션을 소개합니다. 시원한 샌들부터 우아한 드레스까지, 여름을 더욱 특별하게 만들어줄 아이템들을 최대 40% 할인된 가격으로 만나보세요."
      />

      <ProductSection
        products={sortedProducts}
        filterCategories={filterCategories}
        sortOptions={sortOptions}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />

      <PromotionBanner
        title="여름 스타일링 가이드"
        description="스토니의 스타일리스트가 제안하는 여름 스타일링 팁을 확인하고 더욱 세련된 여름 패션을 완성해보세요."
        buttonText="스타일링 가이드 보기"
        imageUrl="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop"
        imageAlt="여름 스타일링"
      />
    </EventPageTemplate>
  );
}
