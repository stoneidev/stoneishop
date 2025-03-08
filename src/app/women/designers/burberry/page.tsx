"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { Typography } from "@/components/atoms/Typography";
import { ProductFilter } from "@/components/molecules/ProductFilter/ProductFilter";
import { ProductSort } from "@/components/molecules/ProductSort/ProductSort";
import { ProductCard } from "@/components/molecules/ProductCard/ProductCard";

// 필터 카테고리 데이터
const filterCategories = [
  {
    name: "카테고리",
    options: [
      { id: "clothing", label: "의류", count: 124 },
      { id: "bags", label: "가방", count: 56 },
      { id: "shoes", label: "신발", count: 42 },
      { id: "accessories", label: "액세서리", count: 78 },
      { id: "beauty", label: "뷰티", count: 23 },
      { id: "jewelry", label: "주얼리", count: 18 },
      { id: "home", label: "홈", count: 12 },
    ],
  },
  {
    name: "의류 유형",
    options: [
      { id: "coats", label: "코트 & 자켓", count: 35 },
      { id: "dresses", label: "드레스", count: 28 },
      { id: "tops", label: "탑 & 블라우스", count: 42 },
      { id: "knitwear", label: "니트웨어", count: 31 },
      { id: "skirts", label: "스커트", count: 19 },
      { id: "pants", label: "팬츠", count: 25 },
      { id: "denim", label: "데님", count: 14 },
    ],
  },
  {
    name: "가방 유형",
    options: [
      { id: "tote", label: "토트백", count: 12 },
      { id: "crossbody", label: "크로스바디백", count: 18 },
      { id: "shoulder", label: "숄더백", count: 15 },
      { id: "clutch", label: "클러치", count: 8 },
      { id: "backpack", label: "백팩", count: 5 },
      { id: "pouch", label: "파우치", count: 7 },
    ],
  },
  {
    name: "신발 유형",
    options: [
      { id: "boots", label: "부츠", count: 14 },
      { id: "flats", label: "플랫", count: 10 },
      { id: "heels", label: "힐", count: 12 },
      { id: "sneakers", label: "스니커즈", count: 8 },
      { id: "sandals", label: "샌들", count: 6 },
    ],
  },
  {
    name: "사이즈",
    options: [
      { id: "xxs", label: "XXS" },
      { id: "xs", label: "XS" },
      { id: "s", label: "S" },
      { id: "m", label: "M" },
      { id: "l", label: "L" },
      { id: "xl", label: "XL" },
      { id: "xxl", label: "XXL" },
    ],
  },
  {
    name: "신발 사이즈",
    options: [
      { id: "35", label: "35" },
      { id: "36", label: "36" },
      { id: "37", label: "37" },
      { id: "38", label: "38" },
      { id: "39", label: "39" },
      { id: "40", label: "40" },
      { id: "41", label: "41" },
    ],
  },
  {
    name: "색상",
    options: [
      { id: "beige", label: "베이지" },
      { id: "black", label: "블랙" },
      { id: "blue", label: "블루" },
      { id: "brown", label: "브라운" },
      { id: "burgundy", label: "버건디" },
      { id: "gray", label: "그레이" },
      { id: "green", label: "그린" },
      { id: "navy", label: "네이비" },
      { id: "orange", label: "오렌지" },
      { id: "pink", label: "핑크" },
      { id: "red", label: "레드" },
      { id: "white", label: "화이트" },
      { id: "yellow", label: "옐로우" },
      { id: "multi", label: "멀티컬러" },
    ],
  },
  {
    name: "소재",
    options: [
      { id: "cotton", label: "코튼" },
      { id: "leather", label: "레더" },
      { id: "silk", label: "실크" },
      { id: "wool", label: "울" },
      { id: "cashmere", label: "캐시미어" },
      { id: "denim", label: "데님" },
      { id: "linen", label: "리넨" },
      { id: "synthetic", label: "합성 소재" },
    ],
  },
  {
    name: "패턴",
    options: [
      { id: "check", label: "체크" },
      { id: "logo", label: "로고" },
      { id: "plain", label: "무지" },
      { id: "print", label: "프린트" },
      { id: "stripe", label: "스트라이프" },
    ],
  },
  {
    name: "가격",
    options: [
      { id: "under-300000", label: "300,000원 미만" },
      { id: "300000-500000", label: "300,000원 - 500,000원" },
      { id: "500000-1000000", label: "500,000원 - 1,000,000원" },
      { id: "1000000-2000000", label: "1,000,000원 - 2,000,000원" },
      { id: "over-2000000", label: "2,000,000원 이상" },
    ],
  },
  {
    name: "할인",
    options: [
      { id: "sale", label: "세일 상품", count: 42 },
      { id: "discount-20", label: "20% 이상 할인", count: 35 },
      { id: "discount-30", label: "30% 이상 할인", count: 28 },
      { id: "discount-50", label: "50% 이상 할인", count: 15 },
    ],
  },
  {
    name: "컬렉션",
    options: [
      { id: "new-arrivals", label: "신상품", count: 56 },
      { id: "classic", label: "클래식 컬렉션", count: 78 },
      { id: "seasonal", label: "시즌 컬렉션", count: 42 },
      { id: "limited", label: "리미티드 에디션", count: 12 },
    ],
  },
];

// 정렬 옵션 데이터
const sortOptions = [
  { id: "recommended", label: "추천순" },
  { id: "new", label: "신상품순" },
  { id: "price-low", label: "낮은 가격순" },
  { id: "price-high", label: "높은 가격순" },
  { id: "discount", label: "할인율순" },
];

// 상품 데이터 (실제로는 API에서 가져올 것)
const products = [
  {
    id: "1",
    name: "버버리 체크 코튼 가보딘 트렌치 코트",
    brand: "Burberry",
    price: 3200000,
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
    imageAlt: "버버리 체크 코튼 가보딘 트렌치 코트",
    isNew: true,
  },
  {
    id: "2",
    name: "버버리 빈티지 체크 코튼 셔츠",
    brand: "Burberry",
    price: 780000,
    imageUrl:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop",
    imageAlt: "버버리 빈티지 체크 코튼 셔츠",
  },
  {
    id: "3",
    name: "버버리 로고 프린트 코튼 티셔츠",
    brand: "Burberry",
    price: 450000,
    originalPrice: 550000,
    imageUrl:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
    imageAlt: "버버리 로고 프린트 코튼 티셔츠",
    isSale: true,
  },
  {
    id: "4",
    name: "버버리 체크 울 캐시미어 스카프",
    brand: "Burberry",
    price: 680000,
    imageUrl:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1887&auto=format&fit=crop",
    imageAlt: "버버리 체크 울 캐시미어 스카프",
  },
  {
    id: "5",
    name: "버버리 TB 모노그램 레더 벨트",
    brand: "Burberry",
    price: 520000,
    imageUrl:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1897&auto=format&fit=crop",
    imageAlt: "버버리 TB 모노그램 레더 벨트",
  },
  {
    id: "6",
    name: "버버리 로고 자카드 크로스바디 백",
    brand: "Burberry",
    price: 1450000,
    originalPrice: 1650000,
    imageUrl:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop",
    imageAlt: "버버리 로고 자카드 크로스바디 백",
    isSale: true,
  },
];

export default function BurberryPage() {
  // 실제 구현에서는 여기서 상태 관리 및 API 호출을 처리

  const handleFilterChange = (category: string, values: string[]) => {
    console.log(`Filter changed: ${category}`, values);
    // 실제 구현에서는 필터링 로직 추가
  };

  const handleSortChange = (sortId: string) => {
    console.log(`Sort changed: ${sortId}`);
    // 실제 구현에서는 정렬 로직 추가
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        {/* 브랜드 배너 */}
        <div className="relative h-64 w-full bg-gray-100 md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1565537222174-2a43ca1c3462?q=80&w=2070&auto=format&fit=crop"
            alt="Burberry"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <Typography
              variant="h1"
              color="white"
              className="text-center font-serif tracking-wider"
            >
              BURBERRY
            </Typography>
          </div>
        </div>

        {/* 브랜드 설명 */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Typography variant="body1" className="text-gray-800">
              1856년 설립된 버버리는 영국의 대표적인 럭셔리 패션 브랜드입니다.
              트렌치코트와 체크 패턴으로 유명하며, 전통과 혁신을 결합한
              디자인으로 세계적인 사랑을 받고 있습니다.
            </Typography>
          </div>
        </div>

        {/* 상품 목록 및 필터 */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
            {/* 필터 사이드바 */}
            <div className="hidden lg:block">
              <ProductFilter
                categories={filterCategories}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* 상품 목록 */}
            <div className="lg:col-span-3">
              {/* 상품 수 및 정렬 */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <Typography variant="body2" className="text-gray-600">
                  총 {products.length}개 상품
                </Typography>
                <ProductSort
                  options={sortOptions}
                  onSortChange={handleSortChange}
                />
              </div>

              {/* 상품 그리드 */}
              <div className="mt-8 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
