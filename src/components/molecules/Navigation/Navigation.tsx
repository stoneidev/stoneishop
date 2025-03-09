// 서버 컴포넌트로 구현
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

interface NavigationProps {
  transparent?: boolean;
  menuItems: MenuItem[];
}

export function Navigation({ transparent = false, menuItems }: NavigationProps) {
  return (
    <nav className="hidden md:flex space-x-8">
      {menuItems.map((item) => (
        <Link
          key={item.id}
          href={`/${item.id}`}
          className={`text-sm font-medium ${
            transparent ? "text-white" : "text-gray-800"
          } hover:text-primary-main transition-colors`}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
} 