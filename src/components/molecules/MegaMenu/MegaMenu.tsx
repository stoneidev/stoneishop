import React from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { Typography } from "@/components/atoms/Typography";

interface MenuSection {
  title: string;
  items: string[];
}

interface MenuItem {
  id: string;
  title: string;
  sections: MenuSection[];
}

interface MegaMenuProps {
  menuData: MenuItem[];
  activeMenu: string | null;
  onMenuHover: (menuId: string) => void;
  onMenuLeave: () => void;
  getCategoryPath: (category: string) => string;
  getItemPath: (item: string) => string;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  menuData,
  activeMenu,
  onMenuHover,
  onMenuLeave,
  getCategoryPath,
  getItemPath,
}) => {
  return (
    <div className="hidden md:block border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-6">
        <nav
          className="relative flex justify-center"
          onMouseLeave={onMenuLeave}
        >
          <ul className="flex">
            {menuData.map((menu) => (
              <li key={menu.id} className="relative">
                <button
                  className="flex items-center px-4 py-3 text-sm font-light tracking-wide text-gray-800 hover:bg-white hover:text-black"
                  onMouseEnter={() => onMenuHover(menu.id)}
                >
                  <span className="uppercase">{menu.title}</span>
                  <FiChevronDown size={14} className="ml-1" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {activeMenu && (
        <div
          className="absolute left-0 z-50 w-full bg-white shadow-lg hidden md:block"
          onMouseEnter={() => onMenuHover(activeMenu)}
          onMouseLeave={onMenuLeave}
        >
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-4 gap-8">
              {menuData
                .find((menu) => menu.id === activeMenu)
                ?.sections.map((section, index) => (
                  <div key={index}>
                    <Typography
                      variant="body1"
                      className="mb-4 font-medium uppercase tracking-wide"
                    >
                      {section.title}
                    </Typography>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link
                            href={`/${getCategoryPath(
                              section.title
                            )}/${getItemPath(item)}`}
                            className="text-gray-600 hover:text-black hover:underline"
                          >
                            <Typography variant="body2">{item}</Typography>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 