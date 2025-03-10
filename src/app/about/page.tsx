"use client";

import React from "react";
import { FaLeaf, FaHandshake, FaGem } from "react-icons/fa";
import { EventPageTemplate } from "@/components/templates/EventPageTemplate/EventPageTemplate";
import { BrandBanner } from "@/components/organisms/BrandBanner/BrandBanner";
import { BrandStory } from "@/components/organisms/BrandStory/BrandStory";
import { BrandValues } from "@/components/organisms/BrandValues/BrandValues";
import { TeamSection } from "@/components/organisms/TeamSection/TeamSection";

export default function AboutPage() {
  // 브랜드 가치 데이터
  const brandValues = [
    {
      icon: <FaLeaf />,
      title: "지속 가능성",
      description:
        "환경을 생각하는 지속 가능한 패션을 추구합니다. 친환경 소재와 생산 방식을 통해 지구를 보호하는 데 기여합니다.",
    },
    {
      icon: <FaHandshake />,
      title: "정직과 투명성",
      description:
        "고객과의 신뢰를 최우선으로 생각합니다. 제품의 원산지, 제작 과정, 가격 책정에 있어 투명하게 공개합니다.",
    },
    {
      icon: <FaGem />,
      title: "품질과 장인정신",
      description:
        "최고의 품질을 위해 장인정신을 바탕으로 한 제품을 선보입니다. 오래 사용할 수 있는 제품으로 빠르게 변하는 트렌드를 넘어선 가치를 제공합니다.",
    },
  ];

  // 팀 멤버 데이터
  const teamMembers = [
    {
      name: "김종일",
      role: "CEO & 창립자",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
      bio: "패션 산업에서 15년 이상의 경험을 가진 전문가로, 스토니의 비전과 방향성을 이끌고 있습니다.",
    },
    {
      name: "임재명",
      role: "크리에이티브 디렉터",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
      bio: "세계적인 패션 하우스에서 경력을 쌓은 디자이너로, 스토니의 창의적인 방향성을 담당합니다.",
    },
    {
      name: "김봄이",
      role: "마케팅 책임자",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
      bio: "디지털 마케팅 전문가로, 스토니의 브랜드 메시지를 효과적으로 전달하는 전략을 수립합니다.",
    },
    {
      name: "이희종",
      role: "제품 개발 책임자",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
      bio: "소재 전문가로서 지속 가능한 제품 개발과 품질 관리를 담당하고 있습니다.",
    },
  ];

  return (
    <EventPageTemplate>
      <BrandBanner
        title="스토니 이야기"
        subtitle="시간이 지나도 변하지 않는 가치를 추구하는 프리미엄 패션 브랜드"
        imageUrl="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
      />

      <BrandStory
        title="우리의 시작"
        description={`스토니는 2015년, 패션 산업의 빠른 소비 문화에 대한 대안을 제시하고자 시작되었습니다. 

'스톤(Stone)'에서 영감을 받은 브랜드명처럼, 시간이 지나도 변하지 않는 가치와 품질을 추구합니다. 트렌드를 좇기보다는 시간이 지나도 사랑받을 수 있는 클래식한 디자인과 최고의 품질을 중요시합니다.

스토니는 단순한 패션 브랜드를 넘어, 지속 가능한 소비 문화를 선도하는 라이프스타일 브랜드로 성장하고 있습니다.`}
        imageUrl="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop"
        imageAlt="스토니 브랜드 스토리"
      />

      <BrandValues
        title="우리의 가치"
        subtitle="스토니가 추구하는 핵심 가치는 지속 가능성, 정직과 투명성, 그리고 품질과 장인정신입니다."
        values={brandValues}
      />

      <BrandStory
        title="우리의 약속"
        description={`스토니는 고객에게 다음과 같은 약속을 드립니다.

첫째, 최고 품질의 제품만을 선보입니다. 엄선된 소재와 장인의 손길로 만들어진 제품은 오랜 시간 함께할 수 있습니다.

둘째, 환경과 사회에 대한 책임을 다합니다. 지속 가능한 소재 사용, 윤리적인 생산 과정, 그리고 사회 공헌 활동을 통해 더 나은 세상을 만들어 갑니다.

셋째, 고객과의 소통을 중요시합니다. 고객의 목소리에 귀 기울이고, 끊임없이 발전하는 브랜드가 되겠습니다.`}
        imageUrl="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop"
        imageAlt="스토니의 약속"
        reverse={true}
      />

      <TeamSection
        title="우리 팀 소개"
        subtitle="스토니를 이끌어가는 열정적인 전문가들을 소개합니다."
        members={teamMembers}
      />
    </EventPageTemplate>
  );
}
