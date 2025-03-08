"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/atoms/Input/Input";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { FiEye, FiEyeOff, FiMail, FiUser } from "react-icons/fi";

export const RegisterForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [receiveOffers, setReceiveOffers] = useState(false);
  
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateForm = () => {
    let isValid = true;
    
    if (!firstName) {
      setFirstNameError("이름을 입력해주세요.");
      isValid = false;
    } else {
      setFirstNameError("");
    }
    
    if (!lastName) {
      setLastNameError("성을 입력해주세요.");
      isValid = false;
    } else {
      setLastNameError("");
    }
    
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("유효한 이메일 주소를 입력해주세요.");
      isValid = false;
    } else {
      setEmailError("");
    }
    
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("비밀번호는 8자 이상이어야 합니다.");
      isValid = false;
    } else {
      setPasswordError("");
    }
    
    if (!confirmPassword) {
      setConfirmPasswordError("비밀번호를 다시 입력해주세요.");
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }
    
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm() && termsAgreed) {
      // 회원가입 로직 구현
      console.log("회원가입 시도:", { firstName, lastName, email, password, receiveOffers });
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-8 text-center">
        <Typography variant="h1" className="font-serif text-3xl font-light">
          새 계정 만들기
        </Typography>
        <div className="mt-2 h-px w-full bg-gray-200"></div>
      </div>
      
      <Typography variant="body2" className="mb-6 text-center text-gray-600">
        Stonei Shop 계정을 만들고 첫 구매 시 10% 할인 혜택을 받으세요.
      </Typography>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            이름
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <FiUser size={18} />
            </div>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="이름을 입력하세요"
              className="pl-10"
              error={firstNameError}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            성
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <FiUser size={18} />
            </div>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="성을 입력하세요"
              className="pl-10"
              error={lastNameError}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            이메일
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <FiMail size={18} />
            </div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 주소를 입력하세요"
              className="pl-10"
              error={emailError}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            새 비밀번호
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              error={passwordError}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            비밀번호 확인
          </label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="비밀번호를 다시 입력하세요"
              error={confirmPasswordError}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 border-gray-300 text-black focus:ring-black"
              checked={termsAgreed}
              onChange={(e) => setTermsAgreed(e.target.checked)}
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              <span>이용약관</span>
              <Link href="/terms" className="mx-1 text-black underline">
                이용약관
              </Link>
              <span>및</span>
              <Link href="/privacy" className="mx-1 text-black underline">
                개인정보 처리방침
              </Link>
              <span>에 동의합니다.</span>
            </label>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center">
            <input
              id="offers"
              type="checkbox"
              className="h-4 w-4 border-gray-300 text-black focus:ring-black"
              checked={receiveOffers}
              onChange={(e) => setReceiveOffers(e.target.checked)}
            />
            <label htmlFor="offers" className="ml-2 block text-sm text-gray-700">
              독점 혜택 및 프로모션 정보를 받고 싶습니다.
            </label>
          </div>
        </div>

        <Button 
          type="submit" 
          fullWidth 
          className="mb-6"
          disabled={!termsAgreed}
          variant={termsAgreed ? "primary" : "secondary"}
        >
          계정 만들기
        </Button>

        <div className="text-center">
          <Typography variant="body2" className="text-gray-600">
            이미 Stonei Shop 계정이 있으신가요?
          </Typography>
          <Link
            href="/login"
            className="mt-2 inline-block text-sm font-medium text-black hover:underline"
          >
            로그인
          </Link>
        </div>
      </form>
    </div>
  );
}; 