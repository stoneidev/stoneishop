import React from "react";
import { Typography } from "@/components/atoms/Typography";

interface StepItemProps {
  number: number;
  title: string;
  description: string;
}

const StepItem: React.FC<StepItemProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <Typography variant="h3" className="text-xl font-medium mb-3">
        {title}
      </Typography>
      <Typography variant="body2" className="text-gray-600 max-w-md">
        {description}
      </Typography>
    </div>
  );
};

interface ShoppingStepsProps {
  title: string;
  subtitle: string;
  steps: StepItemProps[];
}

export const ShoppingSteps: React.FC<ShoppingStepsProps> = ({
  title,
  subtitle,
  steps,
}) => {
  return (
    <div className="py-20 bg-white">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <StepItem
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 