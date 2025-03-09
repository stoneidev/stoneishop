import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import { FiLoader } from "react-icons/fi";

// Playfair Display 폰트 (영문 세리프용)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Pretendard 폰트 (한글 및 기본 산세리프용)
const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Stonei Shop | 럭셔리 패션 & 라이프스타일",
  description: "프리미엄 럭셔리 패션 및 라이프스타일 아이템을 만나보세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} ${playfair.variable} font-sans`}>
        <Suspense
          fallback={
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
              <div className="text-center">
                <FiLoader
                  size={40}
                  className="animate-spin mx-auto text-gray-600"
                />
                <h2 className="mt-4 text-xl font-medium">
                  스토니 스토어 로딩 중...
                </h2>
                <p className="mt-2 text-gray-500">
                  최고의 쇼핑 경험을 준비하고 있습니다
                </p>
              </div>
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
