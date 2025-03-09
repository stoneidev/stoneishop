"use client";

import React from "react";
import { Typography } from "@/components/atoms/Typography";
import { CategoryGrid } from "@/components/molecules/CategoryGrid/CategoryGrid";

// 카테고리 데이터
const categories = [
  {
    id: "wedding",
    title: "웨딩 게스트 룩",
    imageUrl:
      "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?auto=format&fit=crop",
    link: "/category/wedding",
  },
  {
    id: "vacation",
    title: "휴가 스타일",
    imageUrl:
      "https://images.unsplash.com/photo-1527180718958-1721e2518786?auto=format&fit=crop",
    link: "/category/vacation",
  },
  {
    id: "sheer",
    title: "은은한 시스루 룩",
    imageUrl:
      "https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?auto=format&fit=crop",
    link: "/category/sheer",
  },
  {
    id: "outer",
    title: "세련된 발수 아우터",
    imageUrl:
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop",
    link: "/category/outer",
  },
  {
    id: "party",
    title: "파티를 위한 특별한 아이템",
    imageUrl:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop",
    link: "/category/party",
  },
  {
    id: "shoes",
    title: "브라이덜 슈즈",
    imageUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop",
    link: "/category/bridal-shoes",
  },
  {
    id: "workwear",
    title: "워크웨어",
    imageUrl:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop",
    link: "/category/workwear",
  },
  {
    id: "bohemian",
    title: "보헤미안 글램",
    imageUrl:
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop",
    link: "/category/bohemian",
  },
];

export const CategoryShop: React.FC = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <Typography variant="h2" className="text-2xl font-medium mb-2">
          카테고리별 쇼핑하기
        </Typography>
        <Typography
          variant="body1"
          color="secondary"
          className="max-w-2xl mx-auto"
        >
          트렌디한 스타일부터 클래식한 아이템까지, 당신의 스타일을 완성할 다양한
          카테고리를 만나보세요
        </Typography>
      </div>

      <CategoryGrid categories={categories} />
    </section>
  );
};
