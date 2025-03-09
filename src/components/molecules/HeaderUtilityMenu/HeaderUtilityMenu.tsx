import React from "react";
import Link from "next/link";

interface UtilityLink {
  href: string;
  label: string;
}

interface HeaderUtilityMenuProps {
  links: UtilityLink[];
}

export const HeaderUtilityMenu: React.FC<HeaderUtilityMenuProps> = ({
  links,
}) => {
  return (
    <div className="border-b border-gray-100 bg-gray-50">
      <div className="container mx-auto flex justify-end px-6 py-1">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="px-3 py-1 text-xs text-gray-600 hover:text-black"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}; 