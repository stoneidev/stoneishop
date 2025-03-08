"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/atoms/Typography";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface RecommendedItem {
  id: string;
  title: string;
  brand: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  link: string;
}

const recommendedItems: RecommendedItem[] = [
  {
    id: "1",
    title: "파티를 위한 특별한 아이템",
    brand: "Rag & Bone",
    price: 801000,
    discountPrice: 440000,
    imageUrl: "https://picsum.photos/400/500?random=11",
    link: "/product/1",
  },
  {
    id: "2",
    title: "브라이덜 슈즈",
    brand: "Toccin",
    price: 926000,
    discountPrice: 440000,
    imageUrl: "https://picsum.photos/400/500?random=12",
    link: "/product/2",
  },
  {
    id: "3",
    title: "모노그램 블랙 재킷",
    brand: "Ferragamo",
    price: 4487000,
    discountPrice: 440000,
    imageUrl: "https://picsum.photos/400/500?random=13",
    link: "/product/3",
  },
  {
    id: "4",
    title: "엠보싱 크롭 데님 재킷",
    brand: "Rag & Bone",
    price: 1118000,
    discountPrice: 440000,
    imageUrl: "https://picsum.photos/400/500?random=14",
    link: "/product/4",
  },
  {
    id: "5",
    title: "마크 크로셰 타이드 미니드레스",
    brand: "Ramy Brook",
    price: 496000,
    discountPrice: 440000,
    imageUrl: "https://picsum.photos/400/500?random=15",
    link: "/product/5",
  },
  {
    id: "6",
    title: "릴렉스 핏 트렌치코트",
    brand: "Signifier",
    price: 850000,
    discountPrice: 440000,
    imageUrl: "https://picsum.photos/400/500?random=16",
    link: "/product/6",
  },
  {
    id: "7",
    title: "실크 블라우스",
    brand: "Valentino",
    price: 1250000,
    discountPrice: 440000,
    imageUrl: "https://picsum.photos/400/500?random=17",
    link: "/product/7",
  },
];

export const RecommendedItems: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <Typography variant="h2" className="mb-2">
              추천 아이템
            </Typography>
            <Typography variant="body1" color="secondary">
              지금 가장 인기 있는 아이템을 만나보세요
            </Typography>
          </div>
          <Link href="/recommended" className="text-sm font-light underline">
            모두 보기
          </Link>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-2 shadow-md transition-all hover:bg-gray-50"
          >
            <FiChevronLeft size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {recommendedItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="flex-shrink-0 transition-transform hover:scale-[1.02]"
                style={{ width: "280px" }}
              >
                <div className="relative h-[380px] w-full overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3">
                  <Typography variant="body2" className="text-gray-600">
                    {item.brand}
                  </Typography>
                  <Typography variant="body1" className="mt-1 font-medium">
                    {item.title}
                  </Typography>
                  <div className="mt-2 flex items-center">
                    <Typography variant="body1" className="font-medium">
                      ₩{formatPrice(item.price)}
                    </Typography>
                    {item.discountPrice && (
                      <Typography
                        variant="body2"
                        className="ml-2 text-red-600"
                      >
                        최대 ₩{formatPrice(item.discountPrice)} 할인
                      </Typography>
                    )}
                  </div>
                  <Typography
                    variant="caption"
                    className="mt-1 inline-block bg-gray-100 px-2 py-1"
                  >
                    익스클루시브
                  </Typography>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-2 shadow-md transition-all hover:bg-gray-50"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}; 