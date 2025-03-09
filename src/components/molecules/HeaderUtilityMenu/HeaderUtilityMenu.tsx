import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

interface UtilityLink {
  href: string;
  label: string;
  onClick?: () => Promise<void> | void;
}

interface HeaderUtilityMenuProps {
  links: UtilityLink[];
}

export const HeaderUtilityMenu: React.FC<HeaderUtilityMenuProps> = ({
  links,
}) => {
  const router = useRouter();
  const { signOut } = useAuth();

  const handleLinkClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: UtilityLink
  ) => {
    e.preventDefault();

    // 로그아웃 링크인 경우
    if (link.href === "/logout") {
      try {
        await signOut();
        router.push("/"); // 로그아웃 후 홈으로 이동
      } catch (error) {
        console.error("로그아웃 오류:", error);
      }
    } else {
      // 일반 링크인 경우 해당 페이지로 이동
      router.push(link.href);
    }
  };

  return (
    <div className="border-b border-gray-100 bg-gray-50">
      <div className="container mx-auto flex justify-end px-6 py-1">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link)}
            className="px-3 py-1 text-xs text-gray-600 hover:text-black cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
