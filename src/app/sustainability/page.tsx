"use client";

import React from "react";
import { FaRecycle, FaWater, FaSeedling, FaLeaf } from "react-icons/fa";
import { EventPageTemplate } from "@/components/templates/EventPageTemplate/EventPageTemplate";
import { SustainabilityBanner } from "@/components/organisms/SustainabilityBanner/SustainabilityBanner";
import { VisionSection } from "@/components/organisms/VisionSection/VisionSection";
import { InitiativesSection } from "@/components/organisms/InitiativesSection/InitiativesSection";
import { GoalsSection } from "@/components/organisms/GoalsSection/GoalsSection";
import { MaterialsSection } from "@/components/organisms/MaterialsSection/MaterialsSection";

export default function SustainabilityPage() {
  // 지속가능성 이니셔티브 데이터
  const initiatives = [
    {
      title: "재활용 프로그램",
      description:
        "고객이 더 이상 사용하지 않는 스토니 제품을 반납하면 새 제품 구매 시 할인 혜택을 제공하는 순환 경제 프로그램을 운영합니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "재활용 프로그램",
    },
    {
      title: "탄소 중립 생산",
      description:
        "2025년까지 모든 생산 공정에서 탄소 중립을 달성하기 위해 재생 에너지 사용과 탄소 상쇄 프로젝트에 투자하고 있습니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "탄소 중립 생산",
    },
    {
      title: "윤리적 공급망",
      description:
        "모든 협력 업체가 공정한 노동 조건과 환경 기준을 준수하도록 엄격한 윤리적 공급망 정책을 시행하고 있습니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "윤리적 공급망",
    },
  ];

  // 지속가능성 목표 데이터
  const goals = [
    {
      icon: <FaRecycle />,
      title: "100% 재활용 가능한 포장재",
      description:
        "모든 제품 포장을 생분해성 또는 재활용 가능한 소재로 전환합니다.",
      year: "2023",
    },
    {
      icon: <FaWater />,
      title: "물 사용량 50% 감소",
      description:
        "생산 과정에서의 물 사용량을 절반으로 줄이고 폐수 처리 시스템을 개선합니다.",
      year: "2024",
    },
    {
      icon: <FaSeedling />,
      title: "탄소 중립 달성",
      description:
        "모든 사업 운영에서 탄소 중립을 달성하고 공급망의 탄소 발자국을 줄입니다.",
      year: "2025",
    },
    {
      icon: <FaLeaf />,
      title: "100% 지속가능한 소재",
      description: "모든 제품에 친환경적이고 지속가능한 소재만을 사용합니다.",
      year: "2026",
    },
  ];

  // 지속가능한 소재 데이터
  const materials = [
    {
      name: "유기농 코튼",
      description:
        "살충제와 화학 비료 없이 재배된 유기농 코튼은 일반 코튼보다 환경에 미치는 영향이 훨씬 적습니다. 스토니는 GOTS(Global Organic Textile Standard) 인증을 받은 유기농 코튼만을 사용합니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000&auto=format&fit=crop",
      benefits: [
        "물 사용량 91% 감소",
        "에너지 소비 62% 감소",
        "토양 건강 개선",
        "농부와 지역 사회의 건강 보호",
      ],
    },
    {
      name: "재활용 폴리에스터",
      description:
        "플라스틱 병과 해양 폐기물에서 추출한 재활용 폴리에스터를 사용하여 새로운 석유 기반 섬유의 필요성을 줄입니다. 이는 해양 오염을 줄이는 동시에 자원을 절약하는 방법입니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop",
      benefits: [
        "플라스틱 폐기물 감소",
        "석유 소비 감소",
        "에너지 사용량 30-50% 감소",
        "온실가스 배출량 감소",
      ],
    },
    {
      name: "리오셀(Tencel™)",
      description:
        "지속가능한 방식으로 관리되는 숲에서 얻은 목재 펄프로 만든 리오셀은 생분해성이며 생산 과정에서 사용된 물과 용매의 99%를 재활용합니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=1000&auto=format&fit=crop",
      benefits: [
        "생분해성 소재",
        "폐쇄 루프 생산 과정",
        "물 사용량 최소화",
        "부드러운 촉감과 뛰어난 내구성",
      ],
    },
  ];

  return (
    <EventPageTemplate>
      <SustainabilityBanner
        title="지속가능한 미래를 위한 약속"
        subtitle="환경과 사회에 긍정적인 영향을 미치기 위한 스토니의 지속가능성 여정"
        imageUrl="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
      />

      <VisionSection
        title="우리의 지속가능성 비전"
        description={`스토니는 패션 산업의 환경적, 사회적 영향을 최소화하고 긍정적인 변화를 이끌어내기 위해 노력합니다.

우리는 제품 디자인부터 생산, 유통, 그리고 제품 수명 주기의 끝까지 모든 단계에서 지속가능성을 고려합니다. 자원을 보존하고, 폐기물을 줄이며, 공정한 노동 환경을 지원하는 것이 우리의 핵심 가치입니다.

2030년까지 완전한 순환 경제 모델을 구축하여 자원 낭비 없는 패션의 미래를 만들어 가겠습니다.`}
        imageUrl="https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?q=80&w=2070&auto=format&fit=crop"
        imageAlt="지속가능성 비전"
      />

      <InitiativesSection
        title="지속가능성 이니셔티브"
        subtitle="환경과 사회에 긍정적인 영향을 미치기 위한 스토니의 주요 프로그램"
        initiatives={initiatives}
      />

      <GoalsSection
        title="우리의 지속가능성 목표"
        subtitle="스토니는 구체적이고 측정 가능한 지속가능성 목표를 설정하고 이를 달성하기 위해 노력합니다"
        goals={goals}
      />

      <MaterialsSection
        title="지속가능한 소재"
        subtitle="스토니는 환경에 미치는 영향을 최소화하는 혁신적이고 지속가능한 소재를 사용합니다"
        materials={materials}
      />
    </EventPageTemplate>
  );
}
