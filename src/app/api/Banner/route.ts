import { NextResponse } from "next/server";
import admin from "@/lib/firebase/admin";

const db = admin.database();

export async function GET() {
  try {
    // 카테고리 데이터 가져오기
    const snapshot = await db.ref("banner").once("value");
    const banners = snapshot.val();

    // 데이터 형식 확인 및 변환
    if (!banners || !Array.isArray(banners)) {
      return NextResponse.json(
        { error: "카테고리 데이터가 올바른 형식이 아닙니다." },
        { status: 404 }
      );
    }

    // 메가메뉴 형식으로 데이터 변환
    const bannerData = banners.map((banner) => ({
      id: banner.id,
      imageUrl: banner.imageUrl,
      link: banner.link,
      title: banner.title,
    }));

    return NextResponse.json(bannerData);
  } catch (error: unknown) {
    console.error("베너 데이터 가져오기 오류:", error);
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
