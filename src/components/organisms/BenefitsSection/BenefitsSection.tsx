import React from "react";
import { Typography } from "@/components/atoms/Typography";

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start p-4">
      <div className="text-3xl text-primary mr-4 mt-1">{icon}</div>
      <div>
        <Typography variant="h3" className="text-lg font-medium mb-2">
          {title}
        </Typography>
        <Typography variant="body2" className="text-gray-600">
          {description}
        </Typography>
      </div>
    </div>
  );
};

interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  benefits: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  subtitle,
  benefits,
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 