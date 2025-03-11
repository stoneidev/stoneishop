"use client";

import React from "react";
import {
  FaLaptop,
  FaCalendarAlt,
  FaGraduationCap,
  FaHeartbeat,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";
import { EventPageTemplate } from "@/components/templates/EventPageTemplate/EventPageTemplate";
import { CareersBanner } from "@/components/organisms/CareersBanner/CareersBanner";
import { CultureSection } from "@/components/organisms/CultureSection/CultureSection";
import { JobListings } from "@/components/organisms/JobListings/JobListings";
import { BenefitsSection } from "@/components/organisms/BenefitsSection/BenefitsSection";
import { RecruitmentProcess } from "@/components/organisms/RecruitmentProcess/RecruitmentProcess";

export default function CareersPage() {
  // 회사 문화 데이터
  const cultures = [
    {
      title: "창의적인 환경",
      description:
        "자유로운 아이디어 교환과 혁신을 장려하는 환경에서 창의성을 발휘할 수 있습니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "성장 지향적 문화",
      description:
        "지속적인 학습과 개인의 성장을 지원하며, 새로운 도전을 통해 함께 발전합니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "워라밸 존중",
      description:
        "일과 삶의 균형을 중요시하며, 유연한 근무 환경을 통해 최상의 결과를 만들어냅니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  // 채용 공고 데이터
  const jobs = [
    {
      id: "designer",
      title: "패션 디자이너",
      department: "디자인팀",
      location: "서울",
      type: "정규직",
      description:
        "스토니의 디자인 철학을 이해하고 시즌별 컬렉션을 기획 및 디자인할 수 있는 패션 디자이너를 찾습니다. 최소 3년 이상의 관련 경력과 창의적인 포트폴리오를 갖춘 분을 모십니다.",
    },
    {
      id: "developer",
      title: "프론트엔드 개발자",
      department: "IT팀",
      location: "서울",
      type: "정규직",
      description:
        "스토니의 온라인 쇼핑 경험을 향상시킬 프론트엔드 개발자를 모집합니다. React, Next.js에 능숙하고 사용자 중심의 인터페이스 개발에 관심이 있는 분을 찾습니다.",
    },
    {
      id: "marketing",
      title: "디지털 마케팅 전문가",
      department: "마케팅팀",
      location: "서울",
      type: "정규직",
      description:
        "소셜 미디어와 디지털 채널을 통해 스토니의 브랜드 가치를 효과적으로 전달할 마케팅 전문가를 찾습니다. 데이터 분석 능력과 트렌드 파악 능력이 뛰어난 분을 모십니다.",
    },
    {
      id: "merchandiser",
      title: "머천다이저",
      department: "상품기획팀",
      location: "서울",
      type: "정규직",
      description:
        "시장 트렌드를 분석하고 상품 구성을 기획할 머천다이저를 모집합니다. 패션 업계에서의 경험과 상품 기획 능력을 갖춘 분을 찾습니다.",
    },
  ];

  // 복지 혜택 데이터
  const benefits = [
    {
      icon: <FaLaptop />,
      title: "최신 장비 지원",
      description:
        "업무에 필요한 최신 장비와 소프트웨어를 제공하여 최상의 업무 환경을 조성합니다.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "유연한 근무 시간(주3.5)",
      description:
        "코어 타임(10am-4pm)을 제외한 시간은 자유롭게 조정할 수 있는 유연 근무제를 운영합니다.",
    },
    {
      icon: <FaGraduationCap />,
      title: "교육 지원",
      description:
        "직무 관련 교육, 워크샵, 컨퍼런스 참가비를 지원하며, 도서 구입비도 지원합니다.",
    },
    {
      icon: <FaHeartbeat />,
      title: "건강 관리",
      description:
        "정기 건강검진, 단체 상해보험 가입, 헬스장 이용권 등 건강 관리를 위한 다양한 혜택을 제공합니다.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "성과 보상(기본연봉 2억+)",
      description:
        "개인과 팀의 성과에 따른 인센티브 제도를 운영하며, 스톡옵션 기회도 제공합니다.",
    },
    {
      icon: <FaUsers />,
      title: "팀 빌딩 활동",
      description:
        "정기적인 팀 빌딩 활동과 워크샵을 통해 팀워크를 강화하고 즐거운 직장 문화를 만들어갑니다.",
    },
  ];

  // 채용 프로세스 데이터
  const processSteps = [
    {
      number: 1,
      title: "서류 전형",
      description:
        "이력서와 포트폴리오를 검토하여 직무에 적합한 역량과 경험을 평가합니다.",
    },
    {
      number: 2,
      title: "1차 면접",
      description:
        "직무 관련 기술과 경험에 대한 심층 면접을 진행합니다.",
    },
    {
      number: 3,
      title: "2차 면접",
      description:
        "회사 문화 적합성과 팀워크를 평가하는 임원진과의 면접을 진행합니다.",
    },
    {
      number: 4,
      title: "최종 합격",
      description:
        "모든 전형을 통과한 지원자에게 입사 제안을 드립니다.",
    },
  ];

  return (
    <EventPageTemplate>
      <CareersBanner
        title="함께 성장할 인재를 찾습니다"
        subtitle="스토니와 함께 패션의 미래를 만들어갈 열정적인 인재를 기다립니다"
        imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
      />

      <CultureSection
        title="스토니의 문화"
        subtitle="우리는 창의성, 협업, 그리고 지속적인 성장을 중요시합니다"
        cultures={cultures}
      />

      <JobListings
        title="채용 중인 포지션"
        subtitle="스토니와 함께 성장하고 싶다면 지금 지원하세요"
        jobs={jobs}
      />

      <BenefitsSection
        title="복지 및 혜택"
        subtitle="스토니는 구성원들의 행복과 성장을 위한 다양한 복지 제도를 운영합니다"
        benefits={benefits}
      />

      <RecruitmentProcess
        title="채용 프로세스"
        subtitle="스토니의 채용 과정은 투명하고 공정하게 진행됩니다"
        steps={processSteps}
      />
    </EventPageTemplate>
  );
} 
