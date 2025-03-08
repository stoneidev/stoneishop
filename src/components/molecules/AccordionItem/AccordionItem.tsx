import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Typography } from "@/components/atoms/Typography";

interface AccordionItemProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  isExpanded,
  onToggle,
  children,
}) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left"
        onClick={onToggle}
      >
        <Typography variant="subtitle1" className="font-medium">
          {title}
        </Typography>
        {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isExpanded && <div className="mt-4">{children}</div>}
    </div>
  );
}; 