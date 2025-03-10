"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { CartPopupContent } from "@/components/molecules/CartPopupContent/CartPopupContent";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  size?: string;
  color?: string;
}

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  totalPrice: number;
}

export const CartPopup: React.FC<CartPopupProps> = ({
  isOpen,
  onClose,
  items,
  totalPrice,
}) => {
  // ESC 키로 팝업 닫기
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // 팝업 열릴 때 스크롤 방지
      window.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.body.style.overflow = ""; // 팝업 닫힐 때 스크롤 복원
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // 클라이언트 사이드에서만 렌더링
  if (typeof window === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="animate-fadeIn w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <CartPopupContent
          items={items}
          totalPrice={totalPrice}
          onClose={onClose}
        />
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>,
    document.body
  );
}; 