import React from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";

interface BrandStoryProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

export const BrandStory: React.FC<BrandStoryProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
}) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className={reverse ? "lg:order-2" : ""}>
            <Typography variant="h2" className="text-3xl font-medium mb-6">
              {title}
            </Typography>
            <Typography
              variant="body1"
              className="text-gray-600 mb-8 leading-relaxed whitespace-pre-line"
            >
              {description}
            </Typography>
          </div>
          <div className={reverse ? "lg:order-1" : ""}>
            <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
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