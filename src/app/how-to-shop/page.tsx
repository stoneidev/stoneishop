"use client";

import React from "react";
import { EventPageTemplate } from "@/components/templates/EventPageTemplate/EventPageTemplate";
import { ShoppingGuideBanner } from "@/components/organisms/ShoppingGuideBanner/ShoppingGuideBanner";
import { ShoppingSteps } from "@/components/organisms/ShoppingSteps/ShoppingSteps";
import { ShoppingTips } from "@/components/organisms/ShoppingTips/ShoppingTips";
import { SizeGuide } from "@/components/organisms/SizeGuide/SizeGuide";
import { FaqSection } from "@/components/organisms/FaqSection/FaqSection";

export default function HowToShopPage() {
  // 쇼핑 단계 데이터
  const shoppingSteps = [
    {
      number: 1,
      title: "계정 생성",
      description:
        "스토니 웹사이트에서 계정을 생성하여 개인화된 쇼핑 경험을 즐기세요. 위시리스트 저장, 주문 내역 확인, 빠른 결제가 가능합니다.",
    },
    {
      number: 2,
      title: "제품 탐색",
      description:
        "카테고리별로 제품을 탐색하거나 검색 기능을 사용하여 원하는 제품을 찾아보세요. 필터 기능을 활용하면 더 빠르게 원하는 제품을 찾을 수 있습니다.",
    },
    {
      number: 3,
      title: "장바구니에 추가",
      description:
        "마음에 드는 제품을 발견하면 사이즈와 색상을 선택한 후 장바구니에 추가하세요. 장바구니에서 수량 조정이 가능합니다.",
    },
    {
      number: 4,
      title: "결제 및 배송",
      description:
        "안전한 결제 시스템을 통해 주문을 완료하세요. 주문 확인 이메일을 받으면 배송 추적 링크를 통해 배송 상태를 확인할 수 있습니다.",
    },
  ];

  // 쇼핑 팁 데이터
  const shoppingTips = [
    {
      title: "사이즈 측정 방법",
      description:
        "정확한 사이즈 선택을 위해 측정 가이드를 참고하세요. 가슴, 허리, 엉덩이 둘레를 측정하고 사이즈 차트와 비교하면 완벽한 핏을 찾을 수 있습니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "스타일 조합하기",
      description:
        "스토니의 다양한 제품을 조합하여 나만의 스타일을 완성하세요. 기본 아이템과 트렌디한 아이템을 믹스 앤 매치하면 다양한 룩을 연출할 수 있습니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "시즌별 쇼핑 전략",
      description:
        "시즌 초기에는 신상품을, 시즌 말에는 할인 제품을 노려보세요. 기본 아이템은 시즌에 관계없이 구매하고, 트렌드 아이템은 시즌별로 업데이트하는 것이 좋습니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  // 여성 사이즈 데이터
  const womenSizes = {
    headers: ["사이즈", "가슴 둘레(cm)", "허리 둘레(cm)", "엉덩이 둘레(cm)"],
    rows: [
      { size: "XS", measurements: ["82-85", "62-65", "87-90"] },
      { size: "S", measurements: ["86-89", "66-69", "91-94"] },
      { size: "M", measurements: ["90-93", "70-73", "95-98"] },
      { size: "L", measurements: ["94-97", "74-77", "99-102"] },
      { size: "XL", measurements: ["98-101", "78-81", "103-106"] },
    ],
  };

  // 남성 사이즈 데이터
  const menSizes = {
    headers: ["사이즈", "가슴 둘레(cm)", "허리 둘레(cm)", "엉덩이 둘레(cm)"],
    rows: [
      { size: "XS", measurements: ["86-89", "71-74", "86-89"] },
      { size: "S", measurements: ["90-93", "75-78", "90-93"] },
      { size: "M", measurements: ["94-97", "79-82", "94-97"] },
      { size: "L", measurements: ["98-101", "83-86", "98-101"] },
      { size: "XL", measurements: ["102-105", "87-90", "102-105"] },
    ],
  };

  // FAQ 데이터
  const faqs = [
    {
      question: "주문 후 배송까지 얼마나 걸리나요?",
      answer:
        "국내 배송은 주문 확인 후 1-3 영업일 내에 출고되며, 출고 후 1-2일 내에 배송이 완료됩니다. 해외 배송의 경우 지역에 따라 7-14일이 소요될 수 있습니다.",
    },
    {
      question: "교환 및 반품 정책은 어떻게 되나요?",
      answer:
        "제품 수령 후 7일 이내에 교환 및 반품이 가능합니다. 단, 고객의 단순 변심으로 인한 교환/반품의 경우 배송비는 고객 부담입니다. 제품 하자의 경우 무료로 교환/반품이 가능합니다.",
    },
    {
      question: "회원 가입의 혜택은 무엇인가요?",
      answer:
        "회원으로 가입하시면 첫 구매 10% 할인, 생일 쿠폰, 시즌별 특별 프로모션 참여, 신상품 우선 알림 등 다양한 혜택을 받으실 수 있습니다.",
    },
    {
      question: "제품 관리는 어떻게 해야 하나요?",
      answer:
        "각 제품에 부착된 케어 라벨의 지침을 따라주세요. 대부분의 제품은 찬물 또는 미온수로 세탁하고, 자연 건조하는 것이 좋습니다. 고급 소재의 경우 드라이클리닝을 권장합니다.",
    },
    {
      question: "사이즈를 잘못 선택했을 경우 어떻게 해야 하나요?",
      answer:
        "사이즈 교환은 제품 수령 후 7일 이내에 가능합니다. 고객센터로 연락하시거나 마이페이지에서 교환 신청을 해주세요. 재고가 있는 경우 빠르게 교환해 드립니다.",
    },
  ];

  return (
    <EventPageTemplate>
      <ShoppingGuideBanner
        title="쇼핑 가이드"
        subtitle="스토니에서 완벽한 쇼핑 경험을 위한 모든 것"
        imageUrl="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
      />

      <ShoppingSteps
        title="쇼핑 프로세스"
        subtitle="스토니에서 쇼핑하는 간단한 4단계 과정을 알아보세요"
        steps={shoppingSteps}
      />

      <ShoppingTips
        title="스마트 쇼핑 팁"
        subtitle="스토니에서 더 현명하게 쇼핑하는 방법"
        tips={shoppingTips}
      />

      <SizeGuide
        title="사이즈 가이드"
        subtitle="완벽한 핏을 위한 스토니의 사이즈 차트"
        womenSizes={womenSizes}
        menSizes={menSizes}
      />

      <FaqSection
        title="자주 묻는 질문"
        subtitle="쇼핑에 관한 궁금증을 해결해 드립니다"
        faqs={faqs}
      />
    </EventPageTemplate>
  );
} 