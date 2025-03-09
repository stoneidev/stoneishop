import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/atoms/Typography";

interface CategoryCardProps {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  title,
  imageUrl,
  link,
}) => {
  return (
    <Link href={link} className="flex flex-col items-center group">
      <div className="relative w-full h-56 md:h-68 lg:h-76 overflow-hidden border border-gray-200 rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <Typography
        variant="caption"
        className="text-center mt-3 w-full truncate text-[16px]"
      >
        {title}
      </Typography>
    </Link>
  );
}; 