import React from "react";
import { FiUser, FiShoppingBag, FiHeart } from "react-icons/fi";
import { HeaderIconLink } from "@/components/atoms/HeaderIconLink/HeaderIconLink";

export const HeaderIconsGroup: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 sm:space-x-6">
      <HeaderIconLink
        href="/mypage"
        icon={<FiUser size={18} />}
        label="마이페이지"
      />
      <HeaderIconLink
        href="/wishlist"
        icon={<FiHeart size={20} />}
        label="위시리스트"
      />
      <HeaderIconLink
        href="/cart"
        icon={<FiShoppingBag size={20} />}
        label="쇼핑백"
      />
    </div>
  );
}; 