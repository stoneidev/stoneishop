import tokens from "../tokens";

// 색상 토큰 접근 유틸리티
export const getColor = (path: string): string => {
  const parts = path.split(".");
  let result: Record<string, unknown> = tokens.colors;

  for (const part of parts) {
    if (result[part] === undefined) {
      console.warn(`Color token not found: ${path}`);
      return "";
    }

    const value = result[part];

    // 마지막 부분이면 문자열로 반환
    if (parts.indexOf(part) === parts.length - 1) {
      return typeof value === "string" ? value : String(value);
    }

    // 아니면 다음 단계로 진행
    result = value as Record<string, unknown>;
  }

  // 기본 반환값 (여기까지 오면 안 됨)
  return "";
};

// 간격 토큰 접근 유틸리티
export const getSpacing = (value: number | string): string => {
  if (typeof value === "string") return value;
  return (tokens.spacing as Record<number, string>)[value] || `${value}px`;
};

// 타이포그래피 토큰 접근 유틸리티
export const getTypography = (type: string, property: string): string => {
  const typographyToken =
    tokens.typography[type as keyof typeof tokens.typography];
  if (!typographyToken) {
    console.warn(`Typography token not found: ${type}`);
    return "";
  }

  const value = typographyToken[property as keyof typeof typographyToken];
  if (!value) {
    console.warn(`Typography property not found: ${property} in ${type}`);
    return "";
  }

  return value as string;
};

// 그림자 토큰 접근 유틸리티
export const getShadow = (key: string): string => {
  const shadow = tokens.shadows[key as keyof typeof tokens.shadows];
  if (!shadow) {
    console.warn(`Shadow token not found: ${key}`);
    return "none";
  }
  return shadow;
};
