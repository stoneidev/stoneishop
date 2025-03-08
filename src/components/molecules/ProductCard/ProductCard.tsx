"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/atoms/Typography";

type ProductCardProps = {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  imageAlt?: string;
  isNew?: boolean;
  isSale?: boolean;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  brand,
  price,
  originalPrice,
  imageUrl,
  imageAlt,
  isNew,
  isSale,
}) => {
  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(price);

  const formattedOriginalPrice = originalPrice
    ? new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
        maximumFractionDigits: 0,
      }).format(originalPrice)
    : null;

  const discountPercentage =
    originalPrice && ((originalPrice - price) / originalPrice) * 100;

  return (
    <Link href={`/product/${id}`} className="group block">
      <div className="relative mb-3 overflow-hidden">
        <div className="aspect-[3/4] w-full bg-gray-100">
          <Image
            src={imageUrl}
            alt={imageAlt || name}
            width={400}
            height={533}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {(isNew || isSale) && (
          <div className="absolute left-0 top-0 p-2">
            {isNew && (
              <span className="mb-1 inline-block bg-black px-2 py-1 text-xs font-medium text-white">
                NEW
              </span>
            )}
            {isSale && (
              <span className="inline-block bg-error px-2 py-1 text-xs font-medium text-white">
                SALE
              </span>
            )}
          </div>
        )}
      </div>

      <div>
        <Typography variant="caption" className="mb-1 text-gray-800">
          {brand}
        </Typography>
        <Typography variant="body2" className="mb-1 line-clamp-2">
          {name}
        </Typography>
        <div className="flex items-center">
          <Typography variant="body2" className="font-medium">
            {formattedPrice}
          </Typography>
          {formattedOriginalPrice && (
            <Typography
              variant="caption"
              className="ml-2 line-through text-gray-500"
            >
              {formattedOriginalPrice}
            </Typography>
          )}
          {discountPercentage && (
            <Typography variant="caption" className="ml-2 text-error">
              {Math.round(discountPercentage)}% OFF
            </Typography>
          )}
        </div>
      </div>
    </Link>
  );
};
