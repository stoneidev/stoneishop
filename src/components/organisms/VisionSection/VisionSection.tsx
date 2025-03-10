import React from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";

interface VisionSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const VisionSection: React.FC<VisionSectionProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
}) => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-3xl font-medium mb-6">
            {title}
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-600 max-w-3xl mx-auto whitespace-pre-line leading-relaxed"
          >
            {description}
          </Typography>
        </div>
        <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}; 