"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiUser, FiShoppingBag, FiHeart, FiChevronDown } from "react-icons/fi";
import { SearchBar } from "@/components/molecules/SearchBar";
import { Typography } from "@/components/atoms/Typography";

// 메가메뉴 데이터 구조
const megaMenuData = [
  {
    id: "designers",
    title: "디자이너",
    sections: [
      {
        title: "여성 디자이너",
        items: [
          "알렉산더 맥퀸",
          "발렌시아가",
          "보테가 베네타",
          "버버리",
          "셀린느",
          "샤넬",
          "클로에",
          "디올",
          "돌체 & 가바나",
          "펜디",
          "구찌",
          "생로랑",
        ],
      },
      {
        title: "남성 디자이너",
        items: [
          "발렌시아가",
          "버버리",
          "돌체 & 가바나",
          "펜디",
          "구찌",
          "생로랑",
          "로에베",
          "톰 포드",
          "발렌티노",
          "베르사체",
        ],
      },
      {
        title: "인기 디자이너",
        items: [
          "구찌",
          "프라다",
          "생로랑",
          "발렌시아가",
          "버버리",
          "셀린느",
          "디올",
          "펜디",
          "발렌티노",
          "보테가 베네타",
        ],
      },
      {
        title: "디자이너 가방",
        items: [
          "보테가 베네타",
          "버버리",
          "샤넬",
          "클로에",
          "디올",
          "펜디",
          "구찌",
          "생로랑",
          "로에베",
          "프라다",
        ],
      },
    ],
  },
  {
    id: "exclusive",
    title: "익스클루시브",
    sections: [
      {
        title: "익스클루시브 컬렉션",
        items: [
          "Saks 익스클루시브",
          "캡슐 컬렉션",
          "리미티드 에디션",
          "프리 오더",
          "컬렉터 아이템",
        ],
      },
      {
        title: "익스클루시브 이벤트",
        items: [
          "디자이너 트렁크 쇼",
          "팝업 스토어",
          "시그니처 이벤트",
          "VIP 프리뷰",
        ],
      },
      {
        title: "익스클루시브 서비스",
        items: [
          "퍼스널 스타일링",
          "맞춤 제작",
          "VIP 라운지",
          "선물 포장",
          "컨시어지 서비스",
        ],
      },
    ],
  },
  {
    id: "clothing",
    title: "의류",
    sections: [
      {
        title: "여성 의류",
        items: [
          "신상품",
          "자켓 & 코트",
          "드레스",
          "탑 & 블라우스",
          "니트웨어",
          "스커트",
          "팬츠 & 데님",
          "액티브웨어",
          "수영복",
          "란제리",
        ],
      },
      {
        title: "남성 의류",
        items: [
          "신상품",
          "자켓 & 코트",
          "셔츠",
          "니트웨어",
          "티셔츠 & 폴로",
          "팬츠 & 데님",
          "수트",
          "액티브웨어",
          "언더웨어",
        ],
      },
      {
        title: "스타일",
        items: [
          "캐주얼",
          "비즈니스",
          "이브닝",
          "파티",
          "베케이션",
          "시즌 트렌드",
        ],
      },
      {
        title: "인기 브랜드",
        items: [
          "구찌",
          "프라다",
          "생로랑",
          "발렌시아가",
          "버버리",
          "셀린느",
          "디올",
          "펜디",
        ],
      },
    ],
  },
  {
    id: "dresses",
    title: "드레스",
    sections: [
      {
        title: "카테고리",
        items: [
          "칵테일 드레스",
          "이브닝 드레스",
          "파티 드레스",
          "캐주얼 드레스",
          "맥시 드레스",
          "미디 드레스",
          "미니 드레스",
          "웨딩 드레스",
        ],
      },
      {
        title: "시즌",
        items: [
          "봄/여름 드레스",
          "가을/겨울 드레스",
          "리조트 드레스",
          "홀리데이 드레스",
        ],
      },
      {
        title: "인기 브랜드",
        items: [
          "알렉산더 맥퀸",
          "발렌시아가",
          "셀린느",
          "디올",
          "구찌",
          "생로랑",
          "발렌티노",
          "베르사체",
        ],
      },
    ],
  },
  {
    id: "shoes",
    title: "신발",
    sections: [
      {
        title: "여성 슈즈",
        items: [
          "힐 & 펌프스",
          "부츠 & 부티",
          "플랫 & 로퍼",
          "스니커즈",
          "샌들",
          "웨딩슈즈",
          "이브닝 슈즈",
          "에스파드리유",
        ],
      },
      {
        title: "남성 슈즈",
        items: [
          "옥스포드 & 더비",
          "로퍼",
          "스니커즈",
          "부츠",
          "샌들",
          "슬리퍼",
          "드레스 슈즈",
        ],
      },
      {
        title: "인기 브랜드",
        items: [
          "크리스찬 루부탱",
          "지미 추",
          "마놀로 블라닉",
          "구찌",
          "프라다",
          "발렌시아가",
          "페라가모",
          "발렌티노",
        ],
      },
    ],
  },
  {
    id: "bags",
    title: "가방",
    sections: [
      {
        title: "스타일",
        items: [
          "토트백",
          "크로스바디백",
          "숄더백",
          "클러치",
          "백팩",
          "미니백",
          "탑 핸들백",
          "이브닝백",
          "비치백",
          "여행용 가방",
        ],
      },
      {
        title: "인기 브랜드",
        items: [
          "샤넬",
          "디올",
          "구찌",
          "프라다",
          "생로랑",
          "발렌시아가",
          "셀린느",
          "보테가 베네타",
          "로에베",
          "펜디",
        ],
      },
      {
        title: "남성 가방",
        items: [
          "브리프케이스",
          "백팩",
          "메신저백",
          "토트백",
          "여행용 가방",
          "지갑 & 카드홀더",
        ],
      },
    ],
  },
  {
    id: "jewelry",
    title: "주얼리",
    sections: [
      {
        title: "카테고리",
        items: [
          "목걸이 & 펜던트",
          "귀걸이",
          "팔찌",
          "반지",
          "브로치",
          "파인 주얼리",
          "웨딩 주얼리",
          "빈티지 주얼리",
        ],
      },
      {
        title: "인기 브랜드",
        items: [
          "카르티에",
          "불가리",
          "티파니",
          "반클리프 아펠",
          "쇼파드",
          "미키모토",
          "다비드 윰",
          "포멜라토",
        ],
      },
      {
        title: "소재",
        items: [
          "다이아몬드",
          "진주",
          "골드",
          "실버",
          "플래티넘",
          "젬스톤",
          "에나멜",
        ],
      },
    ],
  },
  {
    id: "accessories",
    title: "액세서리",
    sections: [
      {
        title: "여성 액세서리",
        items: [
          "벨트",
          "선글라스",
          "모자",
          "장갑",
          "스카프",
          "헤어 액세서리",
          "키링 & 참",
          "파우치",
        ],
      },
      {
        title: "남성 액세서리",
        items: [
          "타이 & 포켓 스퀘어",
          "벨트",
          "시계",
          "선글라스",
          "모자",
          "장갑",
          "스카프",
          "커프링크스",
        ],
      },
      {
        title: "시계",
        items: [
          "여성 시계",
          "남성 시계",
          "럭셔리 시계",
          "스포츠 시계",
          "스마트 시계",
        ],
      },
      {
        title: "인기 브랜드",
        items: [
          "구찌",
          "프라다",
          "생로랑",
          "발렌시아가",
          "버버리",
          "롤렉스",
          "오메가",
          "태그호이어",
        ],
      },
    ],
  },
  {
    id: "beauty",
    title: "뷰티",
    sections: [
      {
        title: "메이크업",
        items: ["페이스", "립", "아이", "네일", "메이크업 툴", "팔레트 & 세트"],
      },
      {
        title: "스킨케어",
        items: [
          "클렌저",
          "트리트먼트 & 세럼",
          "모이스처라이저",
          "마스크 & 엑스폴리에이터",
          "아이 케어",
          "선 케어",
        ],
      },
      {
        title: "향수",
        items: [
          "여성 향수",
          "남성 향수",
          "유니섹스 향수",
          "향수 세트",
          "바디 스프레이",
        ],
      },
      {
        title: "인기 브랜드",
        items: [
          "샤넬",
          "디올",
          "랑콤",
          "에스티 로더",
          "라 메르",
          "조 말론",
          "톰 포드",
          "입생로랑",
        ],
      },
    ],
  },
  {
    id: "kids",
    title: "키즈",
    sections: [
      {
        title: "여아",
        items: [
          "신상품",
          "아우터",
          "드레스",
          "탑 & 티셔츠",
          "스커트",
          "팬츠 & 데님",
          "슈즈",
          "액세서리",
        ],
      },
      {
        title: "남아",
        items: [
          "신상품",
          "아우터",
          "셔츠",
          "티셔츠 & 폴로",
          "팬츠 & 데님",
          "슈즈",
          "액세서리",
        ],
      },
      {
        title: "베이비",
        items: [
          "신생아",
          "베이비 의류",
          "베이비 슈즈",
          "베이비 액세서리",
          "베이비 기프트",
        ],
      },
      {
        title: "인기 브랜드",
        items: [
          "구찌 키즈",
          "버버리 키즈",
          "랄프 로렌 키즈",
          "몽클레어 키즈",
          "펜디 키즈",
          "돌체 & 가바나 키즈",
        ],
      },
    ],
  },
  {
    id: "home",
    title: "인테리어",
    sections: [
      {
        title: "홈 데코",
        items: [
          "쿠션 & 담요",
          "캔들 & 디퓨저",
          "화병 & 오브제",
          "프레임 & 액자",
          "월 데코",
          "러그 & 매트",
        ],
      },
      {
        title: "테이블웨어",
        items: [
          "디너웨어",
          "글라스웨어",
          "커트러리",
          "서빙웨어",
          "테이블 린넨",
          "바 액세서리",
        ],
      },
      {
        title: "베드 & 배스",
        items: [
          "침구 세트",
          "베개 & 쿠션",
          "타월",
          "배스 액세서리",
          "홈 프래그런스",
        ],
      },
      {
        title: "인기 브랜드",
        items: [
          "에르메스 홈",
          "베르사체 홈",
          "미소니 홈",
          "랄프 로렌 홈",
          "조 말론",
          "딥티크",
        ],
      },
    ],
  },
  {
    id: "gifts",
    title: "인기 기프팅 상품",
    sections: [
      {
        title: "선물 카테고리",
        items: [
          "여성을 위한 선물",
          "남성을 위한 선물",
          "커플 선물",
          "웨딩 선물",
          "생일 선물",
          "기념일 선물",
          "하우스워밍 선물",
        ],
      },
      {
        title: "가격대별 선물",
        items: [
          "10만원 미만",
          "10만원-30만원",
          "30만원-50만원",
          "50만원-100만원",
          "100만원 이상",
          "럭셔리 선물",
        ],
      },
      {
        title: "인기 선물",
        items: [
          "향수 & 뷰티 세트",
          "주얼리 & 시계",
          "가죽 소품",
          "홈 데코",
          "테크 액세서리",
          "기프트 카드",
        ],
      },
    ],
  },
  {
    id: "sale",
    title: "세일",
    sections: [
      {
        title: "여성 세일",
        items: ["의류", "슈즈", "핸드백", "액세서리", "주얼리", "뷰티"],
      },
      {
        title: "남성 세일",
        items: ["의류", "슈즈", "가방", "액세서리", "시계"],
      },
      {
        title: "세일 특가",
        items: [
          "30% 할인",
          "50% 할인",
          "70% 할인",
          "마지막 찬스",
          "클리어런스",
        ],
      },
      {
        title: "시즌 세일",
        items: [
          "여름 세일",
          "겨울 세일",
          "블랙 프라이데이",
          "홀리데이 세일",
          "시즌 오프",
        ],
      },
    ],
  },
];

// 카테고리 경로 변환 함수
const getCategoryPath = (category: string): string => {
  const categoryMap: Record<string, string> = {
    "여성 디자이너": "women/designers",
    "남성 디자이너": "men/designers",
    "인기 디자이너": "designers/popular",
    "디자이너 가방": "bags/designers",
    "여성 의류": "women/clothing",
    "남성 의류": "men/clothing",
    // 필요한 다른 카테고리 매핑 추가
  };

  return categoryMap[category] || category.toLowerCase().replace(/\s+/g, "-");
};

// 아이템 경로 변환 함수
const getItemPath = (item: string): string => {
  // 버버리를 burberry로 변경
  let path = item;
  if (item === "버버리") {
    path = "burberry";
  }
  return path.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
};

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuHover = (menuId: string) => {
    setActiveMenu(menuId);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className="relative border-b border-gray-200">
      {/* 상단 유틸리티 메뉴 */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="container mx-auto flex justify-end px-6 py-1">
          <Link
            href="/login"
            className="px-3 py-1 text-xs text-gray-600 hover:text-black"
          >
            로그인
          </Link>
          <Link
            href="/register"
            className="px-3 py-1 text-xs text-gray-600 hover:text-black"
          >
            회원가입
          </Link>
          <Link
            href="/customer-service"
            className="px-3 py-1 text-xs text-gray-600 hover:text-black"
          >
            고객센터
          </Link>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <h1 className="font-serif text-3xl font-light tracking-wider text-gray-900">
              Stonei
            </h1>
          </Link>

          <SearchBar />

          <div className="flex items-center space-x-6">
            <Link href="/mypage" className="flex flex-col items-center">
              <FiUser size={20} className="text-black" />
              <Typography variant="caption" className="mt-1">
                마이페이지
              </Typography>
            </Link>
            <Link href="/wishlist" className="flex flex-col items-center">
              <FiHeart size={20} className="text-black" />
              <Typography variant="caption" className="mt-1">
                위시리스트
              </Typography>
            </Link>
            <Link href="/cart" className="flex flex-col items-center">
              <FiShoppingBag size={20} className="text-black" />
              <Typography variant="caption" className="mt-1">
                쇼핑백
              </Typography>
            </Link>
          </div>
        </div>
      </div>

      {/* GNB - 카테고리 네비게이션 */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-6">
          <nav
            className="relative flex justify-center"
            onMouseLeave={handleMenuLeave}
          >
            <ul className="flex">
              {megaMenuData.map((menu) => (
                <li key={menu.id} className="relative">
                  <button
                    className="flex items-center px-4 py-3 text-sm font-light tracking-wide text-gray-800 hover:bg-white hover:text-black"
                    onMouseEnter={() => handleMenuHover(menu.id)}
                  >
                    <span className="uppercase">{menu.title}</span>
                    <FiChevronDown size={14} className="ml-1" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* 메가 메뉴 */}
      {activeMenu && (
        <div
          className="absolute left-0 z-50 w-full bg-white shadow-lg"
          onMouseEnter={() => handleMenuHover(activeMenu)}
          onMouseLeave={handleMenuLeave}
        >
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-4 gap-8">
              {megaMenuData
                .find((menu) => menu.id === activeMenu)
                ?.sections.map((section, index) => (
                  <div key={index}>
                    <Typography
                      variant="body1"
                      className="mb-4 font-medium uppercase tracking-wide"
                    >
                      {section.title}
                    </Typography>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link
                            href={`/${getCategoryPath(
                              section.title
                            )}/${getItemPath(item)}`}
                            className="text-gray-600 hover:text-black hover:underline"
                          >
                            <Typography variant="body2">{item}</Typography>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
