"use client";

import React, { useState } from "react";
import Link from "next/link";

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
  menuItems: MenuItem[];
}

export function MegaMenuClient({ menuItems }: MegaMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuHover = (menuId: string) => {
    setActiveMenu(menuId);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="hidden md:block">
      <div
        className="absolute left-0 w-full bg-white shadow-lg z-50"
        onMouseLeave={handleMenuLeave}
        style={{ display: activeMenu ? "block" : "none" }}
      >
        {menuItems.map((item) => (
          <div
            key={item.id}
            style={{ display: activeMenu === item.id ? "block" : "none" }}
            className="container mx-auto py-8 px-4"
          >
            <div className="grid grid-cols-4 gap-8">
              {item.sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-medium mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          href={`/${item.id}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-gray-600 hover:text-primary-main"
                        >
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <nav className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onMouseEnter={() => handleMenuHover(item.id)}
            className="text-sm font-medium text-gray-800 hover:text-primary-main transition-colors"
          >
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  );
} 