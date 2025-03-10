import React from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";

interface CartPopupItemProps {
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
}

export const CartPopupItem: React.FC<CartPopupItemProps> = ({
  imageUrl,
  name,
  price,
  quantity,
  size,
  color,
}) => {
  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div className="flex items-center py-3 border-b border-gray-200">
      <div className="relative w-16 h-20 flex-shrink-0 bg-gray-100">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div className="ml-4 flex-grow">
        <Typography variant="body2" className="font-medium line-clamp-1">
          {name}
        </Typography>
        <div className="flex items-center mt-1 text-sm text-gray-500">
          {size && <span className="mr-2">사이즈: {size}</span>}
          {color && <span>색상: {color}</span>}
        </div>
        <div className="flex justify-between items-center mt-1">
          <Typography variant="body2" className="font-medium">
            {formattedPrice}
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            수량: {quantity}
          </Typography>
        </div>
      </div>
    </div>
  );
}; 