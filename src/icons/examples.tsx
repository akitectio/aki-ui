// Ví dụ về cách import và sử dụng icon SVG files
import React from 'react';

// Cách 1: Import SVG như React component (với Vite)
// import HomeIconSVG from '../assets/icons/home.svg?react';
// import ChartIconSVG from '../assets/icons/chart.svg?react';

// Cách 2: Import SVG như URL và tạo component wrapper
// import homeIconUrl from '../assets/icons/home.svg';

// const HomeIconFromUrl: React.FC<{ size?: number }> = ({ size = 20 }) => (
//   <img src={homeIconUrl} alt="Home" width={size} height={size} />
// );

// Cách 3: Tạo icon component từ path SVG
interface CustomIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const BrandIcon: React.FC<CustomIconProps> = ({ 
  size = 20, 
  color = "currentColor",
  className = ""
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color}
    strokeWidth="2"
    className={className}
  >
    {/* Thay thế path này bằng SVG path của icon bạn */}
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 12l2 2 4-4"/>
  </svg>
);

// Ví dụ icon với gradient
export const GradientIcon: React.FC<CustomIconProps> = ({ 
  size = 20,
  className = ""
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
  >
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
    </defs>
    <path 
      d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" 
      fill="url(#gradient1)"
    />
  </svg>
);

// Icon set object để dễ quản lý
export const CustomIconSet = {
  home: BrandIcon,
  chart: GradientIcon,
  // Thêm các icon khác...
};

// Utility function để render icon động
export const renderIcon = (iconName: keyof typeof CustomIconSet, props?: CustomIconProps) => {
  const IconComponent = CustomIconSet[iconName];
  return IconComponent ? <IconComponent {...props} /> : null;
};
