import React from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";

interface InitiativeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-64">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="p-6">
        <Typography variant="h3" className="text-xl font-medium mb-3">
          {title}
        </Typography>
        <Typography variant="body2" className="text-gray-600">
          {description}
        </Typography>
      </div>
    </div>
  );
};

interface InitiativesSectionProps {
  title: string;
  subtitle: string;
  initiatives: InitiativeCardProps[];
}

export const InitiativesSection: React.FC<InitiativesSectionProps> = ({
  title,
  subtitle,
  initiatives,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <InitiativeCard
              key={index}
              title={initiative.title}
              description={initiative.description}
              imageUrl={initiative.imageUrl}
              imageAlt={initiative.imageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 