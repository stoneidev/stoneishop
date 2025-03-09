import React from "react";
import { CategoryCard } from "@/components/atoms/CategoryCard/CategoryCard";

interface CategoryItem {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

interface CategoryGridProps {
  categories: CategoryItem[];
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          id={category.id}
          title={category.title}
          imageUrl={category.imageUrl}
          link={category.link}
        />
      ))}
    </div>
  );
}; 