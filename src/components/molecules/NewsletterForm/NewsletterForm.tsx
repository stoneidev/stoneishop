"use client";

import React, { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { Input } from "@/components/atoms/Input/Input";

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("이메일을 입력해주세요.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("유효한 이메일 주소를 입력해주세요.");
      return;
    }

    // 여기에 실제 구독 로직 추가
    setSuccess(true);
    setEmail("");
  };

  return (
    <div>
      {success ? (
        <div className="mb-4">
          <Typography variant="body2" className="text-green-600">
            구독해주셔서 감사합니다! 곧 최신 소식을 받아보실 수 있습니다.
          </Typography>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <Input
              type="email"
              placeholder="이메일 주소"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
              className="rounded-r-none"
            />
            <Button type="submit" className="rounded-l-none">
              구독
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
