import React from "react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { MainBanner } from "@/components/organisms/MainBanner";
import { ProductList } from "@/components/organisms/ProductList";
import { CategoryShop } from "@/components/organisms/CategoryShop/CategoryShop";

// 임시 데이터
const newProducts = [
  {
    id: "1",
    title: "여성 캐시미어 니트 스웨터",
    price: 129000,
    discountRate: 20,
    imageUrl: "https://picsum.photos/400/400?random=1",
    brand: "시스템",
  },
  {
    id: "2",
    title: "남성 울 블렌드 코트",
    price: 359000,
    discountRate: 10,
    imageUrl: "https://picsum.photos/400/400?random=2",
    brand: "타미힐피거",
  },
  {
    id: "3",
    title: "여성 플리츠 스커트",
    price: 89000,
    imageUrl: "https://picsum.photos/400/400?random=3",
    brand: "질스튜어트",
  },
  {
    id: "4",
    title: "남성 슬림핏 데님 팬츠",
    price: 79000,
    discountRate: 30,
    imageUrl: "https://picsum.photos/400/400?random=4",
    brand: "폴로",
  },
  {
    id: "5",
    title: "여성 퀼팅 숄더백",
    price: 259000,
    imageUrl: "https://picsum.photos/400/400?random=5",
    brand: "마이클코어스",
  },
];

const bestProducts = [
  {
    id: "6",
    title: "여성 트렌치코트",
    price: 429000,
    discountRate: 15,
    imageUrl: "https://picsum.photos/400/400?random=6",
    brand: "버버리",
  },
  {
    id: "7",
    title: "남성 캐주얼 셔츠",
    price: 99000,
    imageUrl: "https://picsum.photos/400/400?random=7",
    brand: "라코스테",
  },
  {
    id: "8",
    title: "여성 플랫 슈즈",
    price: 159000,
    discountRate: 25,
    imageUrl: "https://picsum.photos/400/400?random=8",
    brand: "페라가모",
  },
  {
    id: "9",
    title: "남성 레더 벨트",
    price: 89000,
    imageUrl: "https://picsum.photos/400/400?random=9",
    brand: "몽블랑",
  },
  {
    id: "10",
    title: "여성 실크 블라우스",
    price: 189000,
    discountRate: 10,
    imageUrl: "https://picsum.photos/400/400?random=10",
    brand: "랄프로렌",
  },
];

export const MainTemplate: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <MainBanner />
        <div className="container mx-auto px-4">
          <CategoryShop />
          <ProductList
            title="신상품"
            products={newProducts}
            viewMoreLink="/products/new"
          />

          <ProductList
            title="베스트 상품"
            products={bestProducts}
            viewMoreLink="/products/best"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
