import React from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";

interface CultureItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CultureItem: React.FC<CultureItemProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-64 overflow-hidden rounded-lg mb-4">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <Typography variant="h3" className="text-xl font-medium mb-2">
        {title}
      </Typography>
      <Typography variant="body2" className="text-gray-600">
        {description}
      </Typography>
    </div>
  );
};

interface CultureSectionProps {
  title: string;
  subtitle: string;
  cultures: CultureItemProps[];
}

export const CultureSection: React.FC<CultureSectionProps> = ({
  title,
  subtitle,
  cultures,
}) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-3xl font-medium mb-4">
            {title}
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-600 max-w-3xl mx-auto"
          >
            {subtitle}
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cultures.map((culture, index) => (
            <CultureItem
              key={index}
              title={culture.title}
              description={culture.description}
              imageUrl={culture.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 