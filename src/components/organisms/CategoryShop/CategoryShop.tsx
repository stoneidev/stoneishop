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
    imageUrl: "https://picsum.photos/400/500?random=1",
    link: "/category/wedding",
  },
  {
    id: "luxury",
    title: "휴가 스타일",
    imageUrl: "https://picsum.photos/400/500?random=2",
    link: "/category/vacation",
  },
  {
    id: "office",
    title: "은은한 시스루 룩",
    imageUrl: "https://picsum.photos/400/500?random=3",
    link: "/category/sheer",
  },
  {
    id: "coat",
    title: "세련된 발수 아우터",
    imageUrl: "https://picsum.photos/400/500?random=4",
    link: "/category/outer",
  },
  {
    id: "party",
    title: "파티를 위한 특별한 아이템",
    imageUrl: "https://picsum.photos/400/500?random=5",
    link: "/category/party",
  },
  {
    id: "shoes",
    title: "브라이덜 슈즈",
    imageUrl: "https://picsum.photos/400/500?random=6",
    link: "/category/bridal-shoes",
  },
  {
    id: "workwear",
    title: "워크웨어",
    imageUrl: "https://picsum.photos/400/500?random=7",
    link: "/category/workwear",
  },
  {
    id: "bohemian",
    title: "보헤미안 글램",
    imageUrl: "https://picsum.photos/400/500?random=8",
    link: "/category/bohemian",
  },
];

export const CategoryShop: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <Typography variant="h2" className="mb-3">
            카테고리별 쇼핑하기
          </Typography>
          <Typography variant="body1" color="secondary" className="max-w-2xl mx-auto">
            트렌디한 스타일부터 클래식한 아이템까지, 당신의 스타일을 완성할 다양한 카테고리를 만나보세요
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group overflow-hidden"
            >
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 text-center">
                  <Typography variant="body1" className="font-medium">
                    {category.title}
                  </Typography>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}; 