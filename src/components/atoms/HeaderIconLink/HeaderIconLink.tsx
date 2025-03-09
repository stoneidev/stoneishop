import React, { ReactNode } from "react";
import Link from "next/link";
import { Typography } from "@/components/atoms/Typography";

interface HeaderIconLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export const HeaderIconLink: React.FC<HeaderIconLinkProps> = ({
  href,
  icon,
  label,
}) => {
  return (
    <Link href={href} className="flex flex-col items-center">
      <div className="text-black">{icon}</div>
      <Typography variant="caption" className="mt-1 text-xs sm:text-sm">
        {label}
      </Typography>
    </Link>
  );
}; 