import React from "react";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { CartPopupItem } from "@/components/atoms/CartPopupItem/CartPopupItem";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  size?: string;
  color?: string;
}

interface CartPopupContentProps {
  items: CartItem[];
  totalPrice: number;
  onClose: () => void;
}

export const CartPopupContent: React.FC<CartPopupContentProps> = ({
  items,
  totalPrice,
  onClose,
}) => {
  const formattedTotalPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(totalPrice);

  return (
    <div className="bg-white shadow-lg rounded-md w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <Typography variant="h6" className="font-medium flex items-center">
          <FiShoppingBag className="mr-2" />
          장바구니에 상품이 추가되었습니다
        </Typography>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>

      <div className="overflow-y-auto p-4 flex-grow">
        {items.length > 0 ? (
          <>
            {items.map((item) => (
              <CartPopupItem
                key={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                size={item.size}
                color={item.color}
              />
            ))}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Typography variant="subtitle2">총 금액</Typography>
                <Typography variant="subtitle1" className="font-medium">
                  {formattedTotalPrice}
                </Typography>
              </div>
            </div>
          </>
        ) : (
          <div className="py-8 text-center">
            <Typography variant="body1" className="text-gray-500">
              장바구니가 비어 있습니다
            </Typography>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row gap-2">
        <Button
          variant="outlined"
          fullWidth
          onClick={onClose}
          className="border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          쇼핑 계속하기
        </Button>
        <Link href="/cart" className="w-full sm:flex-1">
          <Button
            variant="primary"
            fullWidth
            className="bg-black hover:bg-gray-900 text-white"
          >
            장바구니 보기
          </Button>
        </Link>
      </div>
    </div>
  );
}; 