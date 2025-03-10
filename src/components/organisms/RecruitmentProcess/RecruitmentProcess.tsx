import React from "react";
import { Typography } from "@/components/atoms/Typography";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
        {number}
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

interface RecruitmentProcessProps {
  title: string;
  subtitle: string;
  steps: ProcessStepProps[];
}

export const RecruitmentProcess: React.FC<RecruitmentProcessProps> = ({
  title,
  subtitle,
  steps,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <ProcessStep
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