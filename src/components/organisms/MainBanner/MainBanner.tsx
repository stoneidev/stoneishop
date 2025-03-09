"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Typography } from "@/components/atoms/Typography";

interface BannerItem {
  id: number;
  imageUrl: string;
  title: string;
  link: string;
}

export const MainBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // API에서 배너 데이터 가져오기
  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/Banner");

        if (!response.ok) {
          throw new Error("배너 데이터를 가져오는데 실패했습니다");
        }

        const data = await response.json();
        setBanners(data);
      } catch (error) {
        console.error("배너 데이터 로딩 오류:", error);
        // 오류 발생 시 기본 배너 데이터 사용
        setBanners([
          {
            id: 1,
            imageUrl:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&h=400&auto=format&fit=crop",
            title: "여름 신상품 특별 할인",
            link: "/event/summer",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBannerData();
  }, []);

  // 자동 슬라이드 기능
  useEffect(() => {
    if (banners.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  // 로딩 중이거나 배너가 없는 경우 스켈레톤 UI 표시
  if (isLoading || banners.length === 0) {
    return (
      <div className="relative w-full h-[400px] bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <Typography variant="h5" className="text-gray-400">
            배너 로딩 중...
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="min-w-full h-full relative flex-shrink-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={banner.imageUrl}
                alt={banner.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-4 sm:left-8 md:left-12 lg:left-20 max-w-md text-white">
                <h2 className="mb-2 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide text-white font-light">
                  {banner.title}
                </h2>
                <Link
                  href={banner.link}
                  className="inline-block border border-white bg-transparent px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-xs sm:text-sm font-light uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 이전/다음 버튼 */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-transparent p-3 text-white transition-all hover:bg-white hover:text-black"
        aria-label="이전 슬라이드"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-transparent p-3 text-white transition-all hover:bg-white hover:text-black"
        aria-label="다음 슬라이드"
      >
        <FiChevronRight size={24} />
      </button>

      {/* 인디케이터 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`${index + 1}번 슬라이드로 이동`}
          />
        ))}
      </div>
    </div>
  );
};
