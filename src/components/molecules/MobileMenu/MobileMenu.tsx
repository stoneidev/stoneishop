import React from "react";
import Link from "next/link";
import { FiX, FiChevronDown } from "react-icons/fi";
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

interface MobileMenuProps {
  isOpen: boolean;
  menuData: MenuItem[];
  submenuOpen: string | null;
  onClose: () => void;
  onToggleSubmenu: (menuId: string) => void;
  getCategoryPath: (category: string) => string;
  getItemPath: (item: string) => string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  menuData,
  submenuOpen,
  onClose,
  onToggleSubmenu,
  getCategoryPath,
  getItemPath,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
      />
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Typography variant="h6" className="font-medium">
            메뉴
          </Typography>
          <button onClick={onClose} className="p-2">
            <FiX size={24} />
          </button>
        </div>

        <div className="py-2">
          {menuData.map((menu) => (
            <div key={menu.id} className="border-b border-gray-100">
              <button
                className="flex justify-between items-center w-full px-4 py-3 text-left"
                onClick={() => onToggleSubmenu(menu.id)}
              >
                <span className="text-sm font-medium uppercase">
                  {menu.title}
                </span>
                <FiChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    submenuOpen === menu.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {submenuOpen === menu.id && (
                <div className="bg-gray-50 py-2 px-4">
                  {menu.sections.map((section, idx) => (
                    <div key={idx} className="mb-4">
                      <Typography
                        variant="subtitle2"
                        className="mb-2 font-medium"
                      >
                        {section.title}
                      </Typography>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              href={`/${getCategoryPath(
                                section.title
                              )}/${getItemPath(item)}`}
                              className="block py-1 text-sm text-gray-600 hover:text-black"
                              onClick={onClose}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 px-4 py-2 border-t border-gray-200">
          <Link
            href="/login"
            className="block py-2 text-sm"
            onClick={onClose}
          >
            로그인
          </Link>
          <Link
            href="/register"
            className="block py-2 text-sm"
            onClick={onClose}
          >
            회원가입
          </Link>
          <Link
            href="/customer-service"
            className="block py-2 text-sm"
            onClick={onClose}
          >
            고객센터
          </Link>
        </div>
      </div>
    </>
  );
}; 