import React from "react";
import { RegisterForm } from "@/components/organisms/RegisterForm/RegisterForm";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="container mx-auto px-4">
          <RegisterForm />
        </div>
      </main>
      <Footer />
    </div>
  );
} 