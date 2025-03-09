"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  AuthError,
  UserCredential,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/client";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<UserCredential>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    } catch (error: unknown) {
      console.error("구글 로그인 오류:", error);

      // Firebase 오류 타입으로 변환
      const authError = error as AuthError;

      // 오류 코드에 따른 사용자 친화적인 메시지
      if (authError.code === "auth/operation-not-allowed") {
        throw new Error(
          "구글 로그인이 현재 비활성화되어 있습니다. 관리자에게 문의하세요."
        );
      } else if (authError.code === "auth/popup-blocked") {
        throw new Error(
          "팝업이 차단되었습니다. 팝업 차단을 해제하고 다시 시도하세요."
        );
      } else if (authError.code === "auth/popup-closed-by-user") {
        throw new Error("로그인 창이 닫혔습니다. 다시 시도하세요.");
      } else {
        throw new Error(`로그인 중 오류가 발생했습니다: ${authError.message}`);
      }
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("로그아웃 오류:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
