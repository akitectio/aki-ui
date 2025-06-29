import React from 'react';

export interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const HomeIcon: React.FC<IconProps> = ({ 
  className = "", 
  size = 20, 
  color = "currentColor" 
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
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

export const ChartIcon: React.FC<IconProps> = ({ 
  className = "", 
  size = 20, 
  color = "currentColor" 
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
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

export const DocumentIcon: React.FC<IconProps> = ({ 
  className = "", 
  size = 20, 
  color = "currentColor" 
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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10,9 9,9 8,9"/>
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ 
  className = "", 
  size = 20, 
  color = "currentColor" 
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
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ 
  className = "", 
  size = 20, 
  color = "currentColor" 
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
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v6m0 10v6m11-7h-6m-10 0H1m15.5-6.5L19 4l-2.5 2.5M6.5 17.5L4 20l2.5-2.5m0-11L4 4l2.5 2.5m11 11L20 20l-2.5-2.5"/>
  </svg>
);
