import tokens from '../tokens';

// 색상 토큰 접근 유틸리티
export const getColor = (path: string): string => {
  const parts = path.split('.');
  let result: any = tokens.colors;
  
  for (const part of parts) {
    if (result[part] === undefined) {
      console.warn(`Color token not found: ${path}`);
      return '';
    }
    result = result[part];
  }
  
  return result;
};

// 간격 토큰 접근 유틸리티
export const getSpacing = (value: number | string): string => {
  if (typeof value === 'string') return value;
  return tokens.spacing[value] || `${value}px`;
};

// 타이포그래피 토큰 접근 유틸리티
export const getTypography = (type: string, property: string): string => {
  const typographyToken = tokens.typography[type as keyof typeof tokens.typography];
  if (!typographyToken) {
    console.warn(`Typography token not found: ${type}`);
    return '';
  }
  
  const value = typographyToken[property as keyof typeof typographyToken];
  if (!value) {
    console.warn(`Typography property not found: ${property} in ${type}`);
    return '';
  }
  
  return value as string;
};

// 그림자 토큰 접근 유틸리티
export const getShadow = (key: string): string => {
  const shadow = tokens.shadows[key as keyof typeof tokens.shadows];
  if (!shadow) {
    console.warn(`Shadow token not found: ${key}`);
    return 'none';
  }
  return shadow;
}; 