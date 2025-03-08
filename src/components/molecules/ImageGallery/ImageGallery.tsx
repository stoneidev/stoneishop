import React, { useState } from "react";
import Image from "next/image";

interface ImageType {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageType[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
      {/* 썸네일 이미지 */}
      <div className="order-2 flex gap-2 md:order-1 md:flex-col">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative h-16 w-16 overflow-hidden border ${
              mainImage.src === image.src
                ? "border-black"
                : "border-gray-200 hover:border-gray-400"
            }`}
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image.src}
              alt={`${image.alt} 썸네일`}
              fill
              className="object-cover object-center"
            />
          </button>
        ))}
      </div>

      {/* 메인 이미지 */}
      <div className="order-1 md:order-2 md:col-span-4">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}; 