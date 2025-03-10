import React, { useState } from "react";
import { Typography } from "@/components/atoms/Typography";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography variant="h3" className="text-lg font-medium">
          {question}
        </Typography>
        <span className="text-primary">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3">
          <Typography variant="body2" className="text-gray-600">
            {answer}
          </Typography>
        </div>
      )}
    </div>
  );
};

interface FaqSectionProps {
  title: string;
  subtitle: string;
  faqs: FaqItemProps[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  title,
  subtitle,
  faqs,
}) => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 