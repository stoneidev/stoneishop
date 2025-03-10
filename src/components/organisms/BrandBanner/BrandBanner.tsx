"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";

interface BrandBannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export const BrandBanner: React.FC<BrandBannerProps> = ({
  title,
  subtitle,
  imageUrl,
}) => {
  return (
    <div className="relative h-[500px] w-full">
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
        <div className="text-center max-w-4xl px-6 py-8 bg-opacity-30 backdrop-blur-sm rounded-lg">
          <Typography
            variant="h1"
            color="white"
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-shadow-lg"
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            className="text-lg md:text-xl max-w-2xl mx-auto text-shadow"
          >
            {subtitle}
          </Typography>
        </div>
      </div>
    </div>
  );
};
