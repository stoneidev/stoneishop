"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";

interface EventBannerProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  altText: string;
}

export const EventBanner: React.FC<EventBannerProps> = ({
  imageUrl,
  title,
  subtitle,
  altText,
}) => {
  return (
    <div className="relative h-80 w-full bg-gray-100 md:h-96">
      <Image
        src={imageUrl}
        alt={altText}
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-opacity-10 flex items-center justify-center">
        <div className="text-center px-4 py-6 bg-opacity-40 rounded-lg backdrop-blur-sm max-w-3xl">
          <Typography
            variant="h1"
            color="white"
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-4 text-shadow-lg"
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