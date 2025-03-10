import React from "react";
import { Typography } from "@/components/atoms/Typography";

interface ValueItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueItem: React.FC<ValueItemProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6">
      <div className="text-4xl mb-4 text-primary mx-auto">{icon}</div>
      <Typography variant="h3" className="text-xl font-medium mb-3">
        {title}
      </Typography>
      <Typography variant="body2" className="text-gray-600">
        {description}
      </Typography>
    </div>
  );
};

interface BrandValuesProps {
  title: string;
  subtitle: string;
  values: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

export const BrandValues: React.FC<BrandValuesProps> = ({
  title,
  subtitle,
  values,
}) => {
  return (
    <div className="py-16 bg-gray-50">
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
          {values.map((value, index) => (
            <ValueItem
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 