import React, { ReactNode } from "react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

interface EventPageTemplateProps {
  children: ReactNode;
}

export const EventPageTemplate: React.FC<EventPageTemplateProps> = ({
  children,
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
    </div>
  );
}; 