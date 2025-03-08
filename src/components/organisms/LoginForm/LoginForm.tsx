"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/atoms/Input/Input";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { FiEye, FiEyeOff, FiMail } from "react-icons/fi";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("유효한 이메일 주소를 입력해주세요.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    
    if (isEmailValid && isPasswordValid) {
      // 로그인 로직 구현
      console.log("로그인 시도:", { email, password });
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-8 text-center">
        <Typography variant="h1" className="font-serif text-3xl font-light">
          로그인
        </Typography>
        <div className="mt-2 h-px w-full bg-gray-200"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            이메일 또는 휴대폰 번호
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <FiMail size={18} />
            </div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 주소 입력"
              className="pl-10"
              error={emailError}
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-gray-600 hover:text-black hover:underline"
            >
              비밀번호 찾기
            </Link>
          </div>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호 입력"
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

        <Button type="submit" fullWidth className="mb-6">
          로그인
        </Button>

        <div className="text-center">
          <Typography variant="body2" className="text-gray-600">
            Stonei Shop 계정이 없으신가요?
          </Typography>
          <Link
            href="/register"
            className="mt-2 inline-block text-sm font-medium text-black hover:underline"
          >
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
}; 