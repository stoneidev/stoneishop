import React, { useState } from "react";
import { FiHeart, FiShare2, FiShoppingBag } from "react-icons/fi";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { ColorSwatch } from "@/components/atoms/ColorSwatch/ColorSwatch";
import { SizeButton } from "@/components/atoms/SizeButton/SizeButton";
import { QuantitySelector } from "@/components/atoms/QuantitySelector/QuantitySelector";
import { AccordionItem } from "@/components/molecules/AccordionItem/AccordionItem";
import { ImageGallery } from "@/components/molecules/ImageGallery/ImageGallery";
import { CartPopup } from "@/components/organisms/CartPopup/CartPopup";

export interface ProductColor {
  name: string;
  code: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  description: string;
  details: string[];
  sizes: string[];
  colors: ProductColor[];
  images: Array<{ src: string; alt: string }>;
  sku: string;
  stockStatus: string;
  deliveryInfo: string;
}

interface ProductDetailProps {
  product: Product;
  onAddToCart: (
    product: Product,
    size: string,
    color: ProductColor,
    quantity: number
  ) => void;
  onAddToWishlist: (product: Product) => void;
  onOpenSizeGuide: () => void;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  imageUrl: string;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onAddToCart,
  onAddToWishlist,
  onOpenSizeGuide,
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "description",
    "details",
  ]);
  const [quantity, setQuantity] = useState(1);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color: ProductColor) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("사이즈를 선택해주세요.");
      return;
    }

    // 장바구니에 상품 추가
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      imageUrl: product.images[0].src,
      size: selectedSize,
      color: selectedColor.name,
    };

    setCartItems([newItem]);
    setCartTotal(product.price * quantity);
    setIsCartPopupOpen(true);

    // 상위 컴포넌트의 onAddToCart 함수 호출
    onAddToCart(product, selectedSize, selectedColor, quantity);
  };

  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(product.price);

  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
        maximumFractionDigits: 0,
      }).format(product.originalPrice)
    : null;

  return (
    <>
      <div className="lg:grid lg:grid-cols-1 xl:grid-cols-2 lg:gap-x-8">
        {/* 상품 이미지 */}
        <div className="mb-8 lg:mb-0">
          <ImageGallery images={product.images} />
        </div>

        {/* 상품 정보 */}
        <div className="mt-6 lg:mt-0">
          <Typography variant="caption" className="text-gray-500">
            {product.brand}
          </Typography>
          <Typography variant="h3" className="mt-1 text-xl sm:text-2xl">
            {product.name}
          </Typography>

          {/* 가격 정보 */}
          <div className="mt-3 flex flex-wrap items-center">
            <Typography variant="h4" className="font-medium text-lg sm:text-xl">
              {formattedPrice}
            </Typography>
            {formattedOriginalPrice && (
              <>
                <Typography
                  variant="body1"
                  className="ml-2 line-through text-gray-500 text-sm sm:text-base"
                >
                  {formattedOriginalPrice}
                </Typography>
                <Typography
                  variant="body1"
                  className="ml-2 text-red-600 text-sm sm:text-base"
                >
                  {product.discount}% OFF
                </Typography>
              </>
            )}
          </div>

          <div className="mt-6">
            <Typography variant="body2" className="text-gray-600">
              {product.stockStatus}
            </Typography>
            <Typography variant="body2" className="mt-1 text-gray-600">
              {product.deliveryInfo}
            </Typography>
          </div>

          {/* 색상 선택 */}
          <div className="mt-8">
            <Typography variant="subtitle2" className="mb-2">
              색상: {selectedColor.name}
            </Typography>
            <div className="flex space-x-2">
              {product.colors.map((color: ProductColor) => (
                <ColorSwatch
                  key={color.name}
                  color={color.code}
                  name={color.name}
                  isSelected={selectedColor.name === color.name}
                  onClick={() => handleColorSelect(color)}
                />
              ))}
            </div>
          </div>

          {/* 사이즈 선택 */}
          <div className="mb-6 mt-8">
            <div className="flex items-center justify-between">
              <Typography variant="subtitle2" className="mb-2">
                사이즈
              </Typography>
              <button
                className="text-sm text-gray-600 underline"
                onClick={onOpenSizeGuide}
              >
                사이즈 가이드
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((size: string) => (
                <SizeButton
                  key={size}
                  size={size}
                  isSelected={selectedSize === size}
                  onClick={() => handleSizeSelect(size)}
                />
              ))}
            </div>
          </div>

          {/* 수량 선택 */}
          <div className="mb-6 mt-8">
            <Typography variant="subtitle2" className="mb-2">
              수량
            </Typography>
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => handleQuantityChange(1)}
              onDecrease={() => handleQuantityChange(-1)}
            />
          </div>

          {/* 액션 버튼 */}
          <div className="mb-8 mt-8 flex space-x-4">
            <Button
              variant="primary"
              size="large"
              className="flex-1 bg-black py-3 text-white hover:bg-gray-900"
              onClick={handleAddToCart}
            >
              <FiShoppingBag className="mr-2" />
              장바구니에 담기
            </Button>
            <Button
              variant="outlined"
              size="lg"
              className="flex items-center justify-center border border-gray-300 px-4 hover:border-gray-900"
              onClick={() => onAddToWishlist(product)}
            >
              <FiHeart />
            </Button>
            <Button
              variant="outlined"
              size="lg"
              className="flex items-center justify-center border border-gray-300 px-4 hover:border-gray-900"
            >
              <FiShare2 />
            </Button>
          </div>

          {/* 아코디언 섹션 */}
          <div className="border-t border-gray-200">
            <AccordionItem
              title="상품 설명"
              isExpanded={expandedSections.includes("description")}
              onToggle={() => toggleSection("description")}
            >
              <Typography variant="body2" className="text-gray-600">
                {product.description}
              </Typography>
            </AccordionItem>

            <AccordionItem
              title="상품 상세 정보"
              isExpanded={expandedSections.includes("details")}
              onToggle={() => toggleSection("details")}
            >
              <ul className="list-none space-y-4 text-gray-600">
                {product.details.map((detail: string, index: number) => (
                  <li key={index}>
                    <Typography variant="body2">• {detail}</Typography>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Typography variant="body2" className="text-gray-600">
                  상품 코드: {product.sku}
                </Typography>
              </div>
            </AccordionItem>

            <AccordionItem
              title="배송 및 반품"
              isExpanded={expandedSections.includes("shipping")}
              onToggle={() => toggleSection("shipping")}
            >
              <Typography variant="body2" className="text-gray-600">
                - 무료 배송: 모든 주문은 무료로 배송됩니다.
              </Typography>
              <Typography variant="body2" className="mt-2 text-gray-600">
                - 배송 기간: 결제 완료 후 1-3일 이내 출고되며, 출고 후 1-2일 내
                수령 가능합니다.
              </Typography>
              <Typography variant="body2" className="mt-2 text-gray-600">
                - 반품 정책: 상품 수령 후 7일 이내에 반품 신청이 가능합니다.
                상품은 미사용, 미착용 상태여야 하며 모든 택과 라벨이 부착되어
                있어야 합니다.
              </Typography>
            </AccordionItem>
          </div>
        </div>
      </div>

      {/* 장바구니 팝업 */}
      <CartPopup
        isOpen={isCartPopupOpen}
        onClose={() => setIsCartPopupOpen(false)}
        items={cartItems}
        totalPrice={cartTotal}
      />
    </>
  );
};
