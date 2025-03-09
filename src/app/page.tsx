import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { MainBanner } from "@/components/organisms/MainBanner/MainBanner";
import { CategoryShop } from "@/components/organisms/CategoryShop/CategoryShop";
import { ProductList } from "@/components/organisms/ProductList/ProductList";

// 신상품 데이터
const newProducts = [
  {
    id: "1",
    name: "울 블렌드 오버사이즈 코트",
    brand: "Stonei",
    price: 320000,
    originalPrice: 400000,
    imageUrl:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop",
    imageAlt: "울 블렌드 오버사이즈 코트",
    isNew: true,
  },
  {
    id: "2",
    name: "캐시미어 니트 스웨터",
    brand: "Stonei",
    price: 180000,
    imageUrl:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop",
    imageAlt: "캐시미어 니트 스웨터",
    isNew: true,
  },
  {
    id: "3",
    name: "와이드 레그 울 팬츠",
    brand: "Stonei",
    price: 160000,
    originalPrice: 200000,
    imageUrl:
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop",
    imageAlt: "와이드 레그 울 팬츠",
    isNew: true,
    isSale: true,
  },
  {
    id: "4",
    name: "실크 블라우스",
    brand: "Stonei",
    price: 140000,
    imageUrl:
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?auto=format&fit=crop",
    imageAlt: "실크 블라우스",
    isNew: true,
  },
  {
    id: "5",
    name: "레더 크로스바디 백",
    brand: "Stonei",
    price: 250000,
    imageUrl:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop",
    imageAlt: "레더 크로스바디 백",
    isNew: true,
  },
  {
    id: "11",
    name: "캐시미어 목도리",
    brand: "Stonei",
    price: 130000,
    originalPrice: 160000,
    imageUrl:
      "https://images.unsplash.com/photo-1520903074185-8eca362b3dce?auto=format&fit=crop",
    imageAlt: "캐시미어 목도리",
    isNew: true,
    isSale: true,
  },
  {
    id: "12",
    name: "모헤어 카디건",
    brand: "Stonei",
    price: 190000,
    imageUrl:
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop",
    imageAlt: "모헤어 카디건",
    isNew: true,
  },
  {
    id: "13",
    name: "울 코튼 베레모",
    brand: "Stonei",
    price: 85000,
    imageUrl:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop",
    imageAlt: "울 코튼 베레모",
    isNew: true,
  },
  {
    id: "14",
    name: "램스울 터틀넥 니트",
    brand: "Stonei",
    price: 170000,
    originalPrice: 210000,
    imageUrl:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop",
    imageAlt: "램스울 터틀넥 니트",
    isNew: true,
    isSale: true,
  },
  {
    id: "15",
    name: "메리노 울 머플러",
    brand: "Stonei",
    price: 95000,
    imageUrl:
      "https://images.unsplash.com/photo-1520903074185-8eca362b3dce?auto=format&fit=crop",
    imageAlt: "메리노 울 머플러",
    isNew: true,
  },
];

// 베스트 상품 데이터
const bestProducts = [
  {
    id: "6",
    name: "클래식 트렌치 코트",
    brand: "Stonei",
    price: 380000,
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop",
    imageAlt: "클래식 트렌치 코트",
    isBest: true,
  },
  {
    id: "7",
    name: "울 캐시미어 스카프",
    brand: "Stonei",
    price: 120000,
    imageUrl:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop",
    imageAlt: "울 캐시미어 스카프",
    isBest: true,
  },
  {
    id: "8",
    name: "레더 앵클 부츠",
    brand: "Stonei",
    price: 280000,
    originalPrice: 350000,
    imageUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop",
    imageAlt: "레더 앵클 부츠",
    isBest: true,
    isSale: true,
  },
  {
    id: "9",
    name: "울 블렌드 테일러드 자켓",
    brand: "Stonei",
    price: 290000,
    imageUrl:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop",
    imageAlt: "울 블렌드 테일러드 자켓",
    isBest: true,
  },
  {
    id: "10",
    name: "실크 새틴 슬립 드레스",
    brand: "Stonei",
    price: 220000,
    imageUrl:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop",
    imageAlt: "실크 새틴 슬립 드레스",
    isBest: true,
  },
  {
    id: "16",
    name: "캐시미어 후드 스웨터",
    brand: "Stonei",
    price: 260000,
    originalPrice: 320000,
    imageUrl:
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?auto=format&fit=crop",
    imageAlt: "캐시미어 후드 스웨터",
    isBest: true,
    isSale: true,
  },
  {
    id: "17",
    name: "램스킨 레더 장갑",
    brand: "Stonei",
    price: 110000,
    imageUrl:
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop",
    imageAlt: "램스킨 레더 장갑",
    isBest: true,
  },
  {
    id: "18",
    name: "메리노 울 비니",
    brand: "Stonei",
    price: 78000,
    imageUrl:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop",
    imageAlt: "메리노 울 비니",
    isBest: true,
  },
  {
    id: "19",
    name: "코튼 캐시미어 니트 베스트",
    brand: "Stonei",
    price: 170000,
    originalPrice: 210000,
    imageUrl:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop",
    imageAlt: "코튼 캐시미어 니트 베스트",
    isBest: true,
    isSale: true,
  },
  {
    id: "20",
    name: "알파카 울 롱 코트",
    brand: "Stonei",
    price: 420000,
    imageUrl:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop",
    imageAlt: "알파카 울 롱 코트",
    isBest: true,
  },
];

export default function Home() {
  return (
    <MainTemplate>
      <MainBanner />
      <div className="container mx-auto px-4">
        <CategoryShop />
        <ProductList
          title="신상품"
          description="스토니의 새로운 컬렉션을 만나보세요"
          products={newProducts}
          viewType="scroll"
        />
        <ProductList
          title="베스트 상품"
          description="가장 인기 있는 스토니의 아이템"
          products={bestProducts}
          viewType="scroll"
        />
      </div>
    </MainTemplate>
  );
}
