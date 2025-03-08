import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { Typography } from "@/components/atoms/Typography";

// 디자이너 데이터
const designers = [
  {
    id: "burberry",
    name: "버버리",
    description: "영국의 대표적인 럭셔리 패션 브랜드",
    imageUrl: "/images/designers/burberry-logo.jpg",
    path: "/women/designers/burberry",
  },
  {
    id: "gucci",
    name: "구찌",
    description: "이탈리아의 럭셔리 패션 브랜드",
    imageUrl: "/images/designers/gucci-logo.jpg",
    path: "/women/designers/gucci",
  },
  {
    id: "prada",
    name: "프라다",
    description: "이탈리아의 럭셔리 패션 브랜드",
    imageUrl: "/images/designers/prada-logo.jpg",
    path: "/women/designers/prada",
  },
  {
    id: "saint-laurent",
    name: "생로랑",
    description: "프랑스의 럭셔리 패션 브랜드",
    imageUrl: "/images/designers/saint-laurent-logo.jpg",
    path: "/women/designers/saint-laurent",
  },
  {
    id: "balenciaga",
    name: "발렌시아가",
    description: "스페인 출신의 럭셔리 패션 브랜드",
    imageUrl: "/images/designers/balenciaga-logo.jpg",
    path: "/women/designers/balenciaga",
  },
  // 더 많은 디자이너 추가...
];

export default function WomenDesignersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        {/* 페이지 헤더 */}
        <div className="bg-gray-100 py-12 text-center">
          <Typography variant="h1" className="font-serif">
            여성 디자이너
          </Typography>
          <Typography variant="body1" className="mx-auto mt-4 max-w-2xl text-gray-600">
            세계적인 럭셔리 디자이너 브랜드의 최신 여성 컬렉션을 만나보세요.
          </Typography>
        </div>

        {/* 디자이너 그리드 */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {designers.map((designer) => (
              <Link
                key={designer.id}
                href={designer.path}
                className="group block overflow-hidden border border-gray-200 transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/9] relative bg-gray-100">
                  <Image
                    src={designer.imageUrl}
                    alt={designer.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <Typography variant="h5" className="mb-2">
                    {designer.name}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {designer.description}
                  </Typography>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 