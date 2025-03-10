import React from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";

interface MaterialCardProps {
  name: string;
  description: string;
  imageUrl: string;
  benefits: string[];
}

const MaterialCard: React.FC<MaterialCardProps> = ({
  name,
  description,
  imageUrl,
  benefits,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-lg shadow-md">
      <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="w-full md:w-2/3">
        <Typography variant="h3" className="text-xl font-medium mb-3">
          {name}
        </Typography>
        <Typography variant="body2" className="text-gray-600 mb-4">
          {description}
        </Typography>
        <div>
          <Typography variant="body2" className="font-medium mb-2">
            주요 이점:
          </Typography>
          <ul className="list-disc pl-5 text-gray-600">
            {benefits.map((benefit, index) => (
              <li key={index} className="mb-1">
                <Typography variant="body2">{benefit}</Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

interface MaterialsSectionProps {
  title: string;
  subtitle: string;
  materials: MaterialCardProps[];
}

export const MaterialsSection: React.FC<MaterialsSectionProps> = ({
  title,
  subtitle,
  materials,
}) => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
        <div className="space-y-8">
          {materials.map((material, index) => (
            <MaterialCard
              key={index}
              name={material.name}
              description={material.description}
              imageUrl={material.imageUrl}
              benefits={material.benefits}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 