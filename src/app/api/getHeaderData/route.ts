import { NextResponse } from "next/server";
import admin from "@/lib/firebase/admin";

const db = admin.database();

export async function GET() {
  try {
    // 카테고리 데이터 가져오기
    const snapshot = await db.ref("category").once("value");
    const categories = snapshot.val();

    // 데이터 형식 확인 및 변환
    if (!categories || !Array.isArray(categories)) {
      return NextResponse.json(
        { error: "카테고리 데이터가 올바른 형식이 아닙니다." },
        { status: 404 }
      );
    }

    // 메가메뉴 형식으로 데이터 변환
    const megaMenuData = categories.map((category) => ({
      id: category.id,
      title: category.title,
      sections: category.sections || [],
    }));

    return NextResponse.json(megaMenuData);
  } catch (error: unknown) {
    console.error("헤더 데이터 가져오기 오류:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "알 수 없는 오류가 발생했습니다",
      },
      { status: 500 }
    );
  }
}
