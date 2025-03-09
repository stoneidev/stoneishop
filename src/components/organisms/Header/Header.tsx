"use client";

import React, { useState, useEffect, memo } from "react";
import { FiMenu, FiLoader } from "react-icons/fi";
import { SearchBar } from "@/components/molecules/SearchBar";
import { HeaderLogo } from "@/components/atoms/HeaderLogo/HeaderLogo";
import { HeaderIconsGroup } from "@/components/molecules/HeaderIconsGroup/HeaderIconsGroup";
import { HeaderUtilityMenu } from "@/components/molecules/HeaderUtilityMenu/HeaderUtilityMenu";
import { MegaMenu } from "@/components/molecules/MegaMenu/MegaMenu";
import { MobileMenu } from "@/components/molecules/MobileMenu/MobileMenu";
import { Typography } from "@/components/atoms/Typography";

// 메가메뉴 데이터 타입 정의
interface MenuSection {
  title: string;
  items: string[];
}

interface MenuItem {
  id: string;
  title: string;
  sections: MenuSection[];
}

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

// React.memo를 사용하여 헤더 컴포넌트 메모이제이션
const Header = memo(({ transparent = false }: { transparent?: boolean }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(
    null
  );
  const [megaMenuData, setMegaMenuData] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/getHeaderData");
        const data = await response.json();
        setMegaMenuData(data);
      } catch (error) {
        console.error("헤더 데이터를 가져오는 중 오류 발생:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeaderData();
  }, []);

  const handleMenuHover = (menuId: string) => {
    setActiveMenu(menuId);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // 모바일 메뉴를 닫을 때 서브메뉴도 닫기
    if (mobileMenuOpen) {
      setMobileSubmenuOpen(null);
    }
  };

  const toggleMobileSubmenu = (menuId: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === menuId ? null : menuId);
  };

  const utilityLinks = [
    { href: "/login", label: "로그인" },
    { href: "/register", label: "회원가입" },
    { href: "/customer-service", label: "고객센터" },
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="text-center">
          <FiLoader size={40} className="animate-spin mx-auto text-gray-600" />
          <Typography variant="h6" className="mt-4">
            스토니 스토어 로딩 중...
          </Typography>
          <Typography variant="body2" className="mt-2 text-gray-500">
            최고의 쇼핑 경험을 준비하고 있습니다
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <header
      className={`relative border-b ${
        transparent
          ? "bg-transparent border-transparent"
          : "bg-white border-gray-200"
      }`}
    >
      <HeaderUtilityMenu links={utilityLinks} />

      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* 모바일 햄버거 메뉴 버튼 */}
          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="메뉴 열기"
          >
            <FiMenu size={24} />
          </button>

          <HeaderLogo />

          {/* 모바일에서는 검색바 숨김 */}
          <div className="hidden md:block flex-1 mx-8">
            <SearchBar />
          </div>

          <HeaderIconsGroup />
        </div>

        {/* 모바일 전용 검색바 */}
        <div className="mt-3 md:hidden">
          <SearchBar />
        </div>
      </div>

      <MegaMenu
        menuData={megaMenuData}
        activeMenu={activeMenu}
        onMenuHover={handleMenuHover}
        onMenuLeave={handleMenuLeave}
        getCategoryPath={getCategoryPath}
        getItemPath={getItemPath}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        menuData={megaMenuData}
        submenuOpen={mobileSubmenuOpen}
        onClose={toggleMobileMenu}
        onToggleSubmenu={toggleMobileSubmenu}
        getCategoryPath={getCategoryPath}
        getItemPath={getItemPath}
      />
    </header>
  );
});

// 컴포넌트 이름 설정 (개발 도구에서 확인용)
Header.displayName = "Header";

export { Header };
