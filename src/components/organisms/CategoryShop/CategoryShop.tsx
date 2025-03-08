"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/atoms/Typography";

interface CategoryItem {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

const categories: CategoryItem[] = [
  {
    id: "wedding",
    title: "웨딩 게스트 룩",
    imageUrl: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3",
    link: "/category/wedding",
  },
  {
    id: "luxury",
    title: "휴가 스타일",
    imageUrl: "https://images.unsplash.com/photo-1527180718958-1721e2518786",
    link: "/category/vacation",
  },
  {
    id: "office",
    title: "은은한 시스루 룩",
    imageUrl: "https://images.unsplash.com/photo-1603217192634-61068e4d4bf9",
    link: "/category/sheer",
  },
  {
    id: "coat",
    title: "세련된 발수 아우터",
    imageUrl: "https://images.unsplash.com/photo-1520975954732-35dd22299614",
    link: "/category/outer",
  },
  {
    id: "party",
    title: "파티를 위한 특별한 아이템",
    imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93",
    link: "/category/party",
  },
  {
    id: "shoes",
    title: "브라이덜 슈즈",
    imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
    link: "/category/bridal-shoes",
  },
  {
    id: "workwear",
    title: "워크웨어",
    imageUrl: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2",
    link: "/category/workwear",
  },
  {
    id: "bohemian",
    title: "보헤미안 글램",
    imageUrl: "https://images.unsplash.com/photo-1605812860427-4024433a70fd",
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.link}
            className="group overflow-hidden"
          >
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full overflow-hidden">
              <Image
                src={category.imageUrl}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
              <div className="absolute bottom-4 left-4 right-4">
                <Typography
                  variant="h3"
                  className="text-white text-lg sm:text-xl font-light tracking-wide"
                >
                  {category.title}
                </Typography>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
