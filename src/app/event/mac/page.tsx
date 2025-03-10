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
      { id: "macbook", label: "맥북", count: 15 },
      { id: "imac", label: "아이맥", count: 5 },
      { id: "ipad", label: "아이패드", count: 12 },
      { id: "iphone", label: "아이폰", count: 18 },
      { id: "watch", label: "애플워치", count: 10 },
      { id: "accessories", label: "액세서리", count: 25 },
    ],
  },
  {
    name: "시리즈",
    options: [
      { id: "pro", label: "프로", count: 22 },
      { id: "air", label: "에어", count: 8 },
      { id: "mini", label: "미니", count: 6 },
      { id: "standard", label: "기본형", count: 15 },
      { id: "max", label: "맥스", count: 4 },
    ],
  },
  {
    name: "가격대",
    options: [
      { id: "under100", label: "100만원 이하", count: 20 },
      { id: "100to200", label: "100만원 - 200만원", count: 15 },
      { id: "200to300", label: "200만원 - 300만원", count: 12 },
      { id: "over300", label: "300만원 이상", count: 8 },
    ],
  },
  {
    name: "색상",
    options: [
      { id: "silver", label: "실버", count: 25 },
      { id: "spacegray", label: "스페이스 그레이", count: 22 },
      { id: "gold", label: "골드", count: 15 },
      { id: "midnight", label: "미드나이트", count: 10 },
      { id: "starlight", label: "스타라이트", count: 10 },
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

// 애플 제품 데이터
const appleProducts = [
  {
    id: "1",
    name: "MacBook Pro 16형 M3 Max",
    brand: "Apple",
    price: 4390000,
    originalPrice: 4890000,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "MacBook Pro 16형 M3 Max",
    isSale: true,
  },
  {
    id: "2",
    name: "MacBook Air 15형 M2",
    brand: "Apple",
    price: 1890000,
    originalPrice: 2100000,
    imageUrl:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "MacBook Air 15형 M2",
    isSale: true,
  },
  {
    id: "3",
    name: "iMac 24형 M3",
    brand: "Apple",
    price: 1790000,
    originalPrice: 1990000,
    imageUrl:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "iMac 24형 M3",
    isSale: true,
  },
  {
    id: "4",
    name: "Mac mini M2 Pro",
    brand: "Apple",
    price: 1550000,
    originalPrice: 1700000,
    imageUrl:
      "https://images.unsplash.com/photo-1570654621852-9dd25b76b38d?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "Mac mini M2 Pro",
    isSale: true,
  },
  {
    id: "5",
    name: "iPad Pro 12.9형 M2",
    brand: "Apple",
    price: 1729000,
    originalPrice: 1899000,
    imageUrl:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "iPad Pro 12.9형 M2",
    isSale: true,
  },
  {
    id: "6",
    name: "iPad Air 11형 M2",
    brand: "Apple",
    price: 929000,
    imageUrl:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "iPad Air 11형 M2",
  },
  {
    id: "7",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 1850000,
    imageUrl:
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "iPhone 15 Pro Max",
  },
  {
    id: "8",
    name: "iPhone 15",
    brand: "Apple",
    price: 1250000,
    imageUrl:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "iPhone 15",
  },
  {
    id: "9",
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    price: 1149000,
    imageUrl:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "Apple Watch Ultra 2",
  },
  {
    id: "10",
    name: "Apple Watch Series 9",
    brand: "Apple",
    price: 599000,
    imageUrl:
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "Apple Watch Series 9",
  },
  {
    id: "11",
    name: "AirPods Pro 2",
    brand: "Apple",
    price: 359000,
    imageUrl:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "AirPods Pro 2",
  },
  {
    id: "12",
    name: "Magic Keyboard for iPad Pro",
    brand: "Apple",
    price: 429000,
    imageUrl:
      "https://images.unsplash.com/photo-1625242662167-9ba73d268139?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "Magic Keyboard for iPad Pro",
  },
  {
    id: "13",
    name: "MacBook Pro 14형 M3 Pro (특별 한정판)",
    brand: "Apple",
    price: 29900,
    originalPrice: 2990000,
    imageUrl:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=400&h=500&auto=format&fit=crop",
    imageAlt: "MacBook Pro 14형 M3 Pro 특별 한정판",
    isSale: true,
  },
];

export default function MacEventPage() {
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
  const filteredProducts = appleProducts.filter((product) => {
    // 활성화된 필터가 없으면 모든 상품 표시
    if (Object.keys(activeFilters).length === 0) return true;

    // 각 필터 카테고리별로 검사
    return Object.entries(activeFilters).every(([category, values]) => {
      // 해당 카테고리에 선택된 필터가 없으면 통과
      if (values.length === 0) return true;

      // 카테고리별 필터링 로직
      switch (category) {
        case "카테고리":
          // 카테고리 필터링 로직
          return values.some((value) =>
            product.name.toLowerCase().includes(value.toLowerCase())
          );
        case "시리즈":
          return values.some((value) =>
            product.name.toLowerCase().includes(value.toLowerCase())
          );
        case "가격대":
          // 가격대 필터링 로직
          if (values.includes("under100") && product.price < 1000000)
            return true;
          if (
            values.includes("100to200") &&
            product.price >= 1000000 &&
            product.price < 2000000
          )
            return true;
          if (
            values.includes("200to300") &&
            product.price >= 2000000 &&
            product.price < 3000000
          )
            return true;
          if (values.includes("over300") && product.price >= 3000000)
            return true;
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
        imageUrl="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2070&auto=format&fit=crop"
        title="애플 제품 기획전"
        subtitle="최신 애플 제품을 만나보세요. 혁신적인 기술과 세련된 디자인의 조화"
        altText="애플 제품 기획전"
      />

      <EventDescription
        title="Think Different, 애플 에코시스템"
        description="M3 칩을 탑재한 최신 맥북 프로부터 아이폰 15 시리즈까지, 애플의 혁신적인 제품들을 한자리에서 만나보세요. 완벽하게 연동되는 애플 에코시스템으로 더욱 편리하고 생산적인 디지털 라이프를 경험하세요."
      />

      <ProductSection
        products={sortedProducts}
        filterCategories={filterCategories}
        sortOptions={sortOptions}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />

      <PromotionBanner
        title="애플 제품 활용 가이드"
        description="애플 제품의 숨겨진 기능과 활용법을 알아보세요. 전문가가 알려주는 팁과 트릭으로 애플 기기의 잠재력을 최대한 끌어올리세요."
        buttonText="활용 가이드 보기"
        imageUrl="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop"
        imageAlt="애플 제품 활용 가이드"
      />
    </EventPageTemplate>
  );
}
