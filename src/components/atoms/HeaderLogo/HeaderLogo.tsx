import React from "react";
import Link from "next/link";

export const HeaderLogo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <h1 className="font-serif text-2xl sm:text-3xl font-light tracking-wider text-gray-900">
        Stonei
      </h1>
    </Link>
  );
}; 