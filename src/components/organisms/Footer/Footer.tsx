"use client";

import React from "react";
import Link from "next/link";
import { Typography } from "@/components/atoms/Typography";
import { NewsletterForm } from "@/components/molecules/NewsletterForm/NewsletterForm";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Typography variant="h5" className="mb-4">
              고객 서비스
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">문의하기</Typography>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">자주 묻는 질문</Typography>
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">배송 정보</Typography>
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">교환 및 반품</Typography>
                </Link>
              </li>
              <li>
                <Link href="/order-tracking" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">주문 조회</Typography>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Typography variant="h5" className="mb-4">
              쇼핑 가이드
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link href="/how-to-shop" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">쇼핑 방법</Typography>
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">사이즈 가이드</Typography>
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">기프트 카드</Typography>
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">멤버십 프로그램</Typography>
                </Link>
              </li>
              <li>
                <Link href="/store-locator" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">매장 찾기</Typography>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Typography variant="h5" className="mb-4">
              Stonei 소개
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">브랜드 소개</Typography>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">채용 정보</Typography>
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">지속가능성</Typography>
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">보도자료</Typography>
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-600 hover:text-black">
                  <Typography variant="body2">투자자 정보</Typography>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Typography variant="h5" className="mb-4">
              뉴스레터 구독
            </Typography>
            <Typography variant="body2" className="mb-4 text-gray-600">
              최신 컬렉션, 특별 이벤트 및 독점 프로모션에 대한 소식을 받아보세요.
            </Typography>
            <NewsletterForm />
            <div className="mt-6 flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                <FiYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-8 text-center">
          <Typography variant="body2" className="text-gray-600">
            &copy; {new Date().getFullYear()} Stonei Shop. 모든 권리 보유.
          </Typography>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/terms" className="text-xs text-gray-500 hover:text-black">
              이용약관
            </Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-black">
              개인정보처리방침
            </Link>
            <Link href="/legal" className="text-xs text-gray-500 hover:text-black">
              법적 고지
            </Link>
          </div>
          <Typography variant="caption" className="mt-4 block text-gray-500">
            사업자등록번호: 123-45-67890 | 통신판매업신고: 제2023-서울강남-12345호
            <br />
            대표이사: 김스토니 | 주소: 서울특별시 강남구 테헤란로 123, 스토니타워 27층
            <br />
            고객센터: 1800-1234 (평일 09:00-18:00, 주말/공휴일 휴무)
          </Typography>
        </div>
      </div>
    </footer>
  );
}; 