"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FiMail,
  FiLock,
  FiAlertCircle,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input/Input";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { user, signInWithGoogle, signOut } = useAuth();

  useEffect(() => {
    if (user) {
      // 리다이렉트 대신 로그인 상태 표시로 변경
      // router.push("/");
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    setIsLoading(true);

    try {
      // 여기에 이메일/비밀번호 로그인 로직 구현
      // 예: await signInWithEmailAndPassword(auth, email, password);

      router.push("/");
    } catch (error: unknown) {
      setError(
        error instanceof Error
          ? error.message
          : "로그인 중 오류가 발생했습니다."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setIsLoading(true);

    try {
      await signInWithGoogle();
      router.push("/");
    } catch (error: unknown) {
      setError(
        error instanceof Error
          ? error.message
          : "구글 로그인 중 오류가 발생했습니다."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      // 로그아웃 후 페이지 새로고침
      window.location.reload();
    } catch (error) {
      console.error("로그아웃 오류:", error);
    }
  };

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md text-center">
          <div className="flex flex-col items-center">
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                alt="프로필 이미지"
                width={96}
                height={96}
                className="rounded-full mb-4 border-2 border-primary-main object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <FiUser size={40} className="text-primary-main" />
              </div>
            )}

            <Typography variant="h4" className="mb-2">
              환영합니다!
            </Typography>

            <Typography variant="body1" className="mb-6 font-medium">
              {user.displayName || user.email}
            </Typography>

            <div className="space-y-4 w-full">
              <Button
                onClick={() => router.push("/")}
                fullWidth
                className="bg-primary-main hover:bg-primary-dark"
              >
                쇼핑 계속하기
              </Button>

              <Button
                onClick={() => router.push("/my-account")}
                variant="outlined"
                fullWidth
                className="border-primary-main text-primary-main hover:bg-primary-light"
              >
                내 계정 관리
              </Button>

              <Button
                onClick={handleSignOut}
                variant="text"
                className="text-gray-600 hover:text-red-600 flex items-center justify-center mt-4"
              >
                <FiLogOut className="mr-2" />
                로그아웃
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <Typography variant="h4" className="mb-2">
            로그인
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            스토니 스토어에 오신 것을 환영합니다
          </Typography>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-center mb-4">
            <FiAlertCircle className="mr-2" />
            <span>{error}</span>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="이메일 주소"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<FiMail />}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<FiLock />}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-main focus:ring-primary-light border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                로그인 상태 유지
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="text-primary-main hover:text-primary-dark"
              >
                비밀번호를 잊으셨나요?
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <Button type="submit" fullWidth disabled={isLoading}>
              {isLoading ? "로그인 중..." : "로그인"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">또는</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outlined"
              fullWidth
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="flex items-center justify-center transition-all duration-300 hover:bg-gray-50 hover:border-primary-main hover:text-primary-dark hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <FaGoogle className="mr-2 text-red-600" />
              구글 계정으로 로그인
            </Button>
          </div>
        </form>

        <div className="text-center mt-4">
          <Typography variant="body2" className="text-gray-600">
            계정이 없으신가요?{" "}
            <Link
              href="/register"
              className="text-primary-main hover:text-primary-dark"
            >
              회원가입
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
