import React, { ReactNode } from "react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

interface MainTemplateProps {
  children?: ReactNode;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
