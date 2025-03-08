"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface BannerItem {
  id: number;
  imageUrl: string;
  title: string;
  link: string;
}

const banners: BannerItem[] = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/1200/400?random=1",
    title: "여름 신상품 특별 할인",
    link: "/event/summer",
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/1200/400?random=2",
    title: "명품 브랜드 기획전",
    link: "/event/luxury",
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/1200/400?random=3",
    title: "시즌오프 최대 70% 할인",
    link: "/event/seasonoff",
  },
];

export const MainBanner: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    fade: true,
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full"
          >
            <Image
              src={banner.imageUrl}
              alt={banner.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-4 sm:left-8 md:left-12 lg:left-20 max-w-md text-white">
              <h2 className="mb-2 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide text-white font-light">
                {banner.title}
              </h2>
              <a
                href={banner.link}
                className="inline-block border border-white bg-transparent px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-xs sm:text-sm font-light uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
              >
                자세히 보기
              </a>
            </div>
          </div>
        ))}
      </Slider>

      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-transparent p-3 text-white transition-all hover:bg-white hover:text-black"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-transparent p-3 text-white transition-all hover:bg-white hover:text-black"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};
