import React from "react";
import { Typography } from "@/components/atoms/Typography";

interface GoalItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  year: string;
}

const GoalItem: React.FC<GoalItemProps> = ({
  icon,
  title,
  description,
  year,
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
      <div className="text-4xl text-primary mb-4">{icon}</div>
      <Typography variant="h3" className="text-xl font-medium mb-2">
        {title}
      </Typography>
      <Typography variant="body2" className="text-gray-600 mb-4">
        {description}
      </Typography>
      <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
        {year}
      </div>
    </div>
  );
};

interface GoalsSectionProps {
  title: string;
  subtitle: string;
  goals: {
    icon: React.ReactNode;
    title: string;
    description: string;
    year: string;
  }[];
}

export const GoalsSection: React.FC<GoalsSectionProps> = ({
  title,
  subtitle,
  goals,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <GoalItem
              key={index}
              icon={goal.icon}
              title={goal.title}
              description={goal.description}
              year={goal.year}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 