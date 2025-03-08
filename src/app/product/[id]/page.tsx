"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { Breadcrumb } from "@/components/organisms/Breadcrumb/Breadcrumb";
import { ProductDetail } from "@/components/organisms/ProductDetail/ProductDetail";
import { RecommendedProducts } from "@/components/organisms/RecommendedProducts/RecommendedProducts";
import { SizeGuideModal } from "@/components/organisms/SizeGuideModal/SizeGuideModal";
import {
  Product,
  ProductColor,
} from "@/components/organisms/ProductDetail/ProductDetail";

// 상품 데이터 (실제로는 API에서 가져올 것)
const productData = {
  id: "1",
  name: "버버리 체크 코튼 가보딘 트렌치 코트",
  brand: "Burberry",
  price: 3200000,
  originalPrice: 3500000,
  discount: 9,
  description:
    "버버리의 아이코닉한 체크 패턴이 돋보이는 클래식 트렌치 코트입니다. 내구성이 뛰어난 코튼 가보딘 소재로 제작되었으며, 타임리스한 디자인으로 오랫동안 착용할 수 있습니다. 어깨 견장, 건 플랩, 스톰 실드 등 전통적인 트렌치 코트의 디테일을 모두 갖추고 있습니다.",
  details: [
    "코튼 가보딘 100%",
    "더블 브레스트 디자인",
    "벨트 포함",
    "에폴렛 디테일",
    "버튼 커프스",
    "체크 안감",
    "드라이 클리닝 전용",
    "영국 제조",
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: [
    {
      name: "허니",
      code: "#D4A564",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
    },
    {
      name: "블랙",
      code: "#000000",
      image:
        "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "미드 그레이",
      code: "#7D7D7D",
      image:
        "https://images.unsplash.com/photo-1578102718171-ec1f91680562?q=80&w=1935&auto=format&fit=crop",
    },
  ],
  images: [
    {
      src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
      alt: "버버리 체크 코튼 가보딘 트렌치 코트 정면",
    },
    {
      src: "https://images.unsplash.com/photo-1578102718171-ec1f91680562?q=80&w=1935&auto=format&fit=crop",
      alt: "버버리 체크 코튼 가보딘 트렌치 코트 뒷면",
    },
    {
      src: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1974&auto=format&fit=crop",
      alt: "버버리 체크 코튼 가보딘 트렌치 코트 디테일",
    },
    {
      src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
      alt: "버버리 체크 코튼 가보딘 트렌치 코트 착용 이미지",
    },
  ],
  sku: "BUR-TC-2023-001",
  deliveryInfo: "무료 배송 및 무료 반품",
  stockStatus: "재고 있음",
};

// 추천 상품 데이터
const recommendedProducts = [
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
];

// 사이즈 가이드 데이터
const sizeGuideData = {
  tabs: ["사이즈 가이드", "측정 방법"],
  units: ["INCH", "CM"],
  headers: [
    "알파",
    "US",
    "영국",
    "EU",
    "아시아",
    "흉상",
    "허리",
    "넓은 허리",
    "엉덩이",
  ],
  rows: [
    ["XXS", "00", "2", "30", "XS", "76 - 77.5", "56 - 58.5", "56 - 58.5", "84"],
    ["XS", "0", "4", "32", "XS", "79 - 80", "58.5 - 61", "58.5 - 61", "86"],
    ["XS", "2", "6", "34", "XS", "81 - 82.5", "61 - 63.5", "61 - 63.5", "89"],
    ["S", "4", "8", "36", "S", "85 - 86.5", "63.5 - 66", "63.5 - 66", "91.5"],
    ["S", "6", "10", "38", "M", "87.5 - 89", "66 - 68.5", "66 - 68.5", "94"],
    ["M", "8", "12", "40", "L", "90 - 91.5", "68.5 - 71", "68.5 - 71", "96.5"],
    ["M", "10", "14", "42", "ML", "92.5 - 94", "71 - 73.5", "71 - 73.5", "99"],
    [
      "L",
      "12",
      "16",
      "44",
      "XXL",
      "95 - 96.5",
      "75 - 77.5",
      "75 - 77.5",
      "103",
    ],
    [
      "L",
      "14",
      "18",
      "46",
      "XXXL",
      "98 - 100",
      "79 - 81",
      "79 - 81.5",
      "106.5",
    ],
    [
      "XL",
      "16",
      "20",
      "48",
      "XXXXL",
      "105 - 108",
      "82.5 - 85",
      "82.5 - 85",
      "110.5",
    ],
    [
      "XL",
      "18",
      "22",
      "50",
      "XXXXXL",
      "109 - 110.5",
      "86 - 89",
      "86 - 89",
      "114.5",
    ],
    [
      "XXL",
      "20",
      "24",
      "52",
      "XXXXXXL",
      "112 - 113",
      "89 - 91.5",
      "89 - 91.5",
      "118",
    ],
    [
      "XXL",
      "22",
      "26",
      "54",
      "XXXXXXXL",
      "114 - 115.5",
      "91.5 - 94",
      "91.5 - 94",
      "122",
    ],
    [
      "XXXL",
      "24",
      "28",
      "56",
      "XXXXXXXXL",
      "117 - 118",
      "94 - 96.5",
      "94 - 96.5",
      "126",
    ],
    [
      "XXXL",
      "26",
      "30",
      "58",
      "XXXXXXXXXL",
      "119 - 120.5",
      "96.5 - 99",
      "96.5 - 99",
      "129.5",
    ],
    [
      "XXXXL",
      "28",
      "32",
      "60",
      "XXXXXXXXXXL",
      "122 - 124.5",
      "103 - 105.5",
      "103 - 105.5",
      "133.5",
    ],
    [
      "XXXXXL",
      "30",
      "34",
      "62",
      "XXXXXXXXXXXL",
      "124.5 - 127",
      "105.5 - 108",
      "105.5 - 108",
      "137",
    ],
  ],
};

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  useEffect(() => {
    const resolveParams = async () => {
      try {
        const resolvedParams = await params;
        console.log(`상품 ID: ${resolvedParams.id}`);
      } catch (error) {
        console.error("파라미터 처리 중 오류 발생:", error);
      }
    };

    resolveParams();
  }, [params]);

  const handleAddToCart = (
    product: Product,
    size: string,
    color: ProductColor,
    quantity: number
  ) => {
    alert(
      `장바구니에 추가되었습니다: ${product.name}, 색상: ${color.name}, 사이즈: ${size}, 수량: ${quantity}`
    );
  };

  const handleAddToWishlist = (product: Product) => {
    alert(`위시리스트에 추가되었습니다: ${product.name}`);
  };

  const breadcrumbItems = [
    { label: "홈", href: "/" },
    { label: "여성 디자이너", href: "/women/designers" },
    { label: "버버리", href: "/women/designers/burberry" },
    { label: "트렌치 코트" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <ProductDetail
            product={productData}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          />
        </div>

        <RecommendedProducts
          title="함께 구매하면 좋은 상품"
          products={recommendedProducts}
        />
      </main>
      <Footer />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        sizeGuideData={sizeGuideData}
      />
    </div>
  );
}
