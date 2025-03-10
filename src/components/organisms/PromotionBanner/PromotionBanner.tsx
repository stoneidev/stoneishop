import React from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";

interface PromotionBannerProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
  onButtonClick?: () => void;
}

export const PromotionBanner: React.FC<PromotionBannerProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  imageAlt,
  onButtonClick = () => {},
}) => {
  return (
    <div className="bg-gray-50 py-16 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <Typography variant="h2" className="text-3xl font-medium mb-4">
              {title}
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-6">
              {description}
            </Typography>
            <button
              onClick={onButtonClick}
              className="inline-block border border-black bg-transparent px-6 py-3 text-sm font-light uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white"
            >
              {buttonText}
            </button>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
