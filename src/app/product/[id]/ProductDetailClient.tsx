"use client";

import React, { useState } from "react";
import { ProductDetail } from "@/components/organisms/ProductDetail/ProductDetail";
import { SizeGuideModal } from "@/components/organisms/SizeGuideModal/SizeGuideModal";
import {
  Product,
  ProductColor,
} from "@/components/organisms/ProductDetail/ProductDetail";

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
  ],
};

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

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

  return (
    <>
      <ProductDetail
        product={product}
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        sizeGuideData={sizeGuideData}
      />
    </>
  );
}
