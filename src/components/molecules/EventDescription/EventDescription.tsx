import React from "react";
import { Typography } from "@/components/atoms/Typography";

interface EventDescriptionProps {
  title: string;
  description: string;
}

export const EventDescription: React.FC<EventDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <Typography
          variant="h2"
          className="text-2xl md:text-3xl font-medium mb-4"
        >
          {title}
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          {description}
        </Typography>
      </div>
    </div>
  );
}; 