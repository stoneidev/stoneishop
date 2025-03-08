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
    imageUrl:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop",
    brand: "시스템",
  },
  {
    id: "2",
    title: "남성 울 블렌드 코트",
    price: 359000,
    discountRate: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop",
    brand: "타미힐피거",
  },
  {
    id: "3",
    title: "여성 플리츠 스커트",
    price: 89000,
    imageUrl:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop",
    brand: "질스튜어트",
  },
  {
    id: "4",
    title: "남성 슬림핏 데님 팬츠",
    price: 79000,
    discountRate: 30,
    imageUrl:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop",
    brand: "폴로",
  },
  {
    id: "5",
    title: "여성 퀼팅 숄더백",
    price: 259000,
    imageUrl:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop",
    brand: "마이클코어스",
  },
  {
    id: "11",
    title: "여성 실크 블라우스",
    price: 149000,
    discountRate: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop",
    brand: "쟈딕앤볼테르",
  },
  {
    id: "12",
    title: "남성 캐시미어 머플러",
    price: 89000,
    imageUrl:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop",
    brand: "버버리",
  },
  {
    id: "13",
    title: "여성 레더 앵클부츠",
    price: 279000,
    discountRate: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop",
    brand: "스튜어트 와이츠먼",
  },
  {
    id: "14",
    title: "남성 울 니트 베스트",
    price: 129000,
    imageUrl:
      "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?auto=format&fit=crop",
    brand: "브룩스 브라더스",
  },
  {
    id: "15",
    title: "여성 와이드 팬츠",
    price: 119000,
    discountRate: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop",
    brand: "COS",
  },
];

const bestProducts = [
  {
    id: "6",
    title: "여성 트렌치코트",
    price: 429000,
    discountRate: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1591900947067-851789555ef3?auto=format&fit=crop",
    brand: "버버리",
  },
  {
    id: "7",
    title: "남성 캐주얼 셔츠",
    price: 99000,
    imageUrl:
      "https://images.unsplash.com/photo-1598961942613-ba897716405b?auto=format&fit=crop",
    brand: "라코스테",
  },
  {
    id: "8",
    title: "여성 플랫 슈즈",
    price: 159000,
    discountRate: 25,
    imageUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop",
    brand: "페라가모",
  },
  {
    id: "9",
    title: "남성 레더 벨트",
    price: 89000,
    imageUrl:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop",
    brand: "몽블랑",
  },
  {
    id: "10",
    title: "여성 실크 블라우스",
    price: 189000,
    discountRate: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?auto=format&fit=crop",
    brand: "랄프로렌",
  },
  {
    id: "16",
    title: "남성 클래식 수트",
    price: 599000,
    discountRate: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop",
    brand: "휴고 보스",
  },
  {
    id: "17",
    title: "여성 레더 크로스백",
    price: 329000,
    imageUrl:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop",
    brand: "코치",
  },
  {
    id: "18",
    title: "남성 캐주얼 스니커즈",
    price: 119000,
    discountRate: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop",
    brand: "컨버스",
  },
  {
    id: "19",
    title: "여성 캐시미어 가디건",
    price: 199000,
    imageUrl:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop",
    brand: "막스마라",
  },
  {
    id: "20",
    title: "남성 데님 자켓",
    price: 159000,
    discountRate: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop",
    brand: "리바이스",
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
            products={newProducts.map((product) => ({
              id: product.id,
              name: product.title,
              brand: product.brand,
              price: product.price,
              originalPrice: product.discountRate
                ? Math.round(product.price / (1 - product.discountRate / 100))
                : undefined,
              imageUrl: product.imageUrl,
              imageAlt: product.title,
              isSale: !!product.discountRate,
            }))}
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
